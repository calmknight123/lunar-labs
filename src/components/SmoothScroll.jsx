import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}