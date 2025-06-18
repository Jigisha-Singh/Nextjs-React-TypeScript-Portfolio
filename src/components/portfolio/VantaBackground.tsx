"use client";

import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      // Fetch computed styles for colors
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryColorHex = parseInt(computedStyle.getPropertyValue('--primary').trim().replace('hsl(240, 67%, 90%)', '0xDBD9FA').replace('#', ''), 16); // Approx for HSL
      const backgroundColorHex = parseInt(computedStyle.getPropertyValue('--background').trim().replace('hsl(0, 0%, 96%)', '0xF5F5F5').replace('#', ''), 16); // Approx for HSL
      
      // Ensure THREE is available for Vanta
      (window as any).THREE = THREE;

      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: primaryColorHex || 0xdbd9fa, // Fallback to soft lavender hex
          backgroundColor: backgroundColorHex || 0xf5f5f5, // Fallback to light gray hex
          points: 10.00,
          maxDistance: 20.00,
          spacing: 15.00
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative w-full h-full">
      {children}
    </div>
  );
};

export default VantaBackground;
