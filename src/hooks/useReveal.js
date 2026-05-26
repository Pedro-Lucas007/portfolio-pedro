import { useEffect, useRef } from "react";

/**
 * Hook simples para aplicar animações fade-up / fade-in via IntersectionObserver.
 * Aplica a classe "in-view" em qualquer elemento descendente que possua a classe
 * "pl-fade-up" ou "pl-fade-in" dentro do container retornado pelo ref.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current || document;
    const nodes = root.querySelectorAll(".pl-fade-up, .pl-fade-in");
    if (!nodes.length) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      nodes.forEach((n) => n.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return ref;
}
