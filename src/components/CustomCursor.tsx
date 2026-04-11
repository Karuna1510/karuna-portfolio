import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/** Above ChatWidget (z 999999) and other overlays — must stay on top */
const CURSOR_Z = 10_000_000;

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringScaleRef = useRef(1);
  const ringBorderRef = useRef('rgba(255,255,255,0.5)');
  const dotColorRef = useRef('#ffffff');
  const [finePointer, setFinePointer] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const onChange = () => setFinePointer(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!finePointer) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;
    let visible = false;

    const reducedMotion = () =>
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setVisible = (v: boolean) => {
      visible = v;
      const o = v ? '1' : '0';
      ring.style.opacity = o;
      dot.style.opacity = o;
    };

    const isMouseLike = (e: PointerEvent | MouseEvent) =>
      'pointerType' in e ? e.pointerType === 'mouse' : true;

    /** Sample what’s under the pointer (cursor layers are pointer-events: none) */
    const refreshCursorStyle = () => {
      const pick = document.elementFromPoint(mouseX, mouseY) as HTMLElement | null;
      const light = !!pick?.closest?.('[data-cursor-theme="light"]');
      const interactive = pick?.closest?.('a, button, [role="button"], input, textarea, select, label');
      const isTextField = pick?.closest?.('input, textarea, select, [contenteditable="true"]');

      dotColorRef.current = light ? '#18181b' : '#ffffff';

      if (interactive && !isTextField) {
        ringScaleRef.current = 1.18;
        ringBorderRef.current = light ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.6)';
      } else {
        ringScaleRef.current = 1;
        ringBorderRef.current = light ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.5)';
      }
    };

    const onMove = (e: PointerEvent | MouseEvent) => {
      if (!isMouseLike(e as PointerEvent)) return;
      if (!visible) setVisible(true);
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      refreshCursorStyle();
    };

    const onLeaveWindow = () => setVisible(false);

    const loop = () => {
      const lag = reducedMotion() ? 1 : 0.35;
      ringX += (mouseX - ringX) * lag;
      ringY += (mouseY - ringY) * lag;
      const s = ringScaleRef.current;
      ring.style.transform = `translate3d(${ringX - 14}px, ${ringY - 14}px, 0) scale(${s})`;
      ring.style.borderColor = ringBorderRef.current;
      dot.style.backgroundColor = dotColorRef.current;
      raf = requestAnimationFrame(loop);
    };

    const onOver = () => refreshCursorStyle();

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, true);
    document.addEventListener('mouseleave', onLeaveWindow);
    document.documentElement.addEventListener('mouseleave', onLeaveWindow);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver, true);
      document.removeEventListener('mouseleave', onLeaveWindow);
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow);
      cancelAnimationFrame(raf);
    };
  }, [finePointer]);

  if (!finePointer) return null;

  const nodes = (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0"
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '1.25px solid rgba(255,255,255,0.5)',
          opacity: 0,
          transition: 'border-color 0.2s, opacity 0.25s',
          willChange: 'transform',
          zIndex: CURSOR_Z,
          WebkitTransform: 'translate3d(0,0,0)',
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'white',
          opacity: 0,
          transition: 'opacity 0.25s, background-color 0.2s',
          willChange: 'transform',
          zIndex: CURSOR_Z,
          WebkitTransform: 'translate3d(0,0,0)',
        }}
      />
    </>
  );

  return typeof document !== 'undefined' ? createPortal(nodes, document.body) : null;
}
