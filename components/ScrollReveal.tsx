// components/ScrollReveal.tsx
"use client";

import { useEffect } from "react";

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        } else {
          reveal.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return <>{children}</>;
}