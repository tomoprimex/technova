'use client';

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, direction = "up" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (direction === "left") return "translateX(-80px)";
    if (direction === "right") return "translateX(80px)";
    return "translateY(50px)";
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0,0)" : getTransform(),
        transition: "all 0.8s ease",
      }}
    >
      {children}
    </div>
  );
}