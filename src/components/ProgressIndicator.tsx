'use client';
import { useRef, useEffect } from "react";

export function ProgressIndicator() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = totalScroll / windowHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrolled})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50 h-1 bg-transparent pointer-events-none">
      <div 
        ref={progressRef} 
        className="h-full bg-[var(--accent)] origin-left transform-gpu"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      ></div>
    </div>
  );
}
