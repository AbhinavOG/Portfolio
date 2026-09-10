"use client";

import { createElement, useCallback, useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Milliseconds of delay before the element animates in. */
  delayMs?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Subtle scroll-triggered reveal: fades and rises into view once.
 * Respects prefers-reduced-motion (handled in CSS).
 */
export function Reveal({ children, delayMs = 0, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${delayMs}ms`;
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node;
  }, []);

  return createElement(
    as,
    { ref: setRef, className: `reveal ${className ?? ""}`.trim() },
    children
  );
}