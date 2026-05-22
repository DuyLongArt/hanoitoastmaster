import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation = "fade-in-up" | "fade-in" | "scale-in" | "slide-in-left" | "slide-in-right";

type Props = {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  /** Delay in ms before animation starts */
  delay?: number;
  /** How much of the element must be visible (0–1) */
  threshold?: number;
};

/**
 * Plays an entrance animation when the element scrolls into view.
 * Uses IntersectionObserver — no extra libraries.
 */
export function AnimateIn({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${visible ? `animate-${animation}` : "opacity-0"} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
