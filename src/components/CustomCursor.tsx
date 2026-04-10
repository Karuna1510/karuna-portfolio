import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot snaps instantly
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    // Ring follows with slight lag
    const loop = () => {
      ringX += (mouseX - ringX) * 0.35;
      ringY += (mouseY - ringY) * 0.35;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    };
    const onLeave = () => {
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };

    // Scale ring up on clickable elements
    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"]')) {
        ring.style.transform += ' scale(1.6)';
        ring.style.borderColor = 'rgba(255,255,255,0.6)';
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"]')) {
        ring.style.borderColor = 'rgba(255,255,255,0.5)';
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.5)',
          opacity: 0,
          transition: 'border-color 0.2s, opacity 0.3s',
          willChange: 'transform',
        }}
      />
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'white',
          opacity: 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
