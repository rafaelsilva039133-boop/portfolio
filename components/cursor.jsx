"use client"

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react"

function Cursor() {

  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  
  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [])

  return (
    <motion.div 
      className="w-5 h-5 bg-(--color-secondary) fixed rounded-full z-30 pointer-events-none"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y
      }}
    >
      
    </motion.div>
  )
}

export default Cursor;