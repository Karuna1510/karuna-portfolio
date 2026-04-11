/** Short “card flip” tick — Web Audio, no external files. */

let ctx: AudioContext | null = null;
let unlockListenersInstalled = false;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!ctx) ctx = new AudioContext();
    return ctx;
  } catch {
    return null;
  }
}

/**
 * Browsers keep AudioContext suspended until a *user gesture* (click / key / touch).
 * Hover alone does not count, so first-time visitors hear nothing until they’ve clicked
 * somewhere. We resume the context on the first pointerdown / keydown anywhere.
 */
export function initFlipSoundUnlock() {
  if (typeof window === 'undefined' || unlockListenersInstalled) return;
  unlockListenersInstalled = true;

  const unlock = () => {
    const audio = getCtx();
    if (audio?.state === 'suspended') void audio.resume();
  };

  window.addEventListener('pointerdown', unlock, { capture: true, passive: true });
  window.addEventListener('keydown', unlock, { capture: true, passive: true });
  window.addEventListener('touchstart', unlock, { capture: true, passive: true });
}

/**
 * Soft, short “tap” — warm low sine that falls away quickly.
 * Intentionally minimal (no noise, no chime stack) so it stays pleasant on repeat.
 */
function playTone(audio: AudioContext) {
  const t = audio.currentTime;
  const osc = audio.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(285, t);
  osc.frequency.exponentialRampToValueAtTime(155, t + 0.052);

  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.072, t + 0.0035);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);

  const lowpass = audio.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.setValueAtTime(900, t);
  lowpass.Q.setValueAtTime(0.7, t);

  osc.connect(gain);
  gain.connect(lowpass);
  lowpass.connect(audio.destination);
  osc.start(t);
  osc.stop(t + 0.095);
}

export function playFlipSound() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const audio = getCtx();
  if (!audio) return;

  const run = () => {
    if (audio.state !== 'running') return;
    playTone(audio);
  };

  if (audio.state === 'suspended') {
    void audio.resume().then(run).catch(() => {});
  } else {
    run();
  }
}
