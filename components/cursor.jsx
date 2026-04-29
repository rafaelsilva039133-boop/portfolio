"use client"

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CURSOR_VARIANTS = {
  default: { dot: { width: 10, height: 10 }, ring: { width: 36, height: 36, opacity: 0.7 } },
  hover:   { dot: { width: 6,  height: 6  }, ring: { width: 54, height: 54, opacity: 0.5 } },
  click:   { dot: { width: 14, height: 14 }, ring: { width: 24, height: 24, opacity: 1   } },
  text:    { dot: { width: 2,  height: 22, borderRadius: 2 }, ring: { width: 20, height: 20, opacity: 0 } },
  hidden:  { dot: { opacity: 0 }, ring: { opacity: 0 } },
};

export default function Cursor() {
  const [variant, setVariant] = useState("default");

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // O ponto segue direto o mouse
  const dot = {
    x: useSpring(mouse.x, { damping: 30, stiffness: 500, mass: 0.3 }),
    y: useSpring(mouse.y, { damping: 30, stiffness: 500, mass: 0.3 }),
  };

  // O anel tem mais inércia — cria o efeito de "atraso"
  const ring = {
    x: useSpring(mouse.x, { damping: 28, stiffness: 400, mass: 0.3 }),
    y: useSpring(mouse.y, { damping: 28, stiffness: 400, mass: 0.3 }),
  };

  useEffect(() => {
    const move = (e) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    const handleDown = () => setVariant("click");
    const handleUp   = () => setVariant("default");
    const handleLeave = () => setVariant("hidden");
    const handleEnter = () => setVariant("default");

    // Detecta elementos interativos automaticamente
    const handleOver = (e) => {
      const el = e.target;
      if (el.matches('input, textarea, [contenteditable]')) {
        setVariant("text");
      } else if (el.matches('a, button, [role="button"], [data-cursor="hover"]')) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  const v = CURSOR_VARIANTS[variant];

  return (
    <>
      {/* Ponto central */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full bg-[#7C2D12] -translate-x-1/2 -translate-y-1/2"
        style={{ left: dot.x, top: dot.y }}
        animate={{ width: v.dot.width ?? 10, height: v.dot.height ?? 10, opacity: v.dot.opacity ?? 1, borderRadius: v.dot.borderRadius ?? 9999 }}
        transition={{ duration: 0.15 }}
      />

      {/* Anel externo com lag */}
      <motion.div
        className="fixed z-[9998] pointer-events-none rounded-full border border-[#7C2D12] -translate-x-1/2 -translate-y-1/2"
        style={{ left: ring.x, top: ring.y }}
        animate={{ width: v.ring.width, height: v.ring.height, opacity: v.ring.opacity }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}