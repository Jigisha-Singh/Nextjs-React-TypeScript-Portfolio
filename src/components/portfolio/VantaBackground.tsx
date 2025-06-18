
"use client";

import { useEffect, useRef, useState } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min'; // Changed from GLOBE
import * as THREE from 'three';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

// Helper function to parse HSL string "H S% L%" into [H, S, L] numbers
function parseHslString(hslString: string): [number, number, number] {
  const parts = hslString.split(' ');
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1].replace('%', ''));
  const l = parseFloat(parts[2].replace('%', ''));
  if (isNaN(h) || isNaN(s) || isNaN(l)) {
    // Fallback to a default if parsing fails, to prevent crashes
    console.error(`Invalid HSL string: ${hslString}, using default.`);
    return [240, 60, 50]; // Default to a darker soft lavender
  }
  return [h, s, l];
}

// Helper function to convert HSL to a hex number for Vanta
function hslToHexNumber(h: number, s: number, l: number): number {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const colorValue = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    // Ensure colorValue is within [0, 1] range
    const clampedColorValue = Math.max(0, Math.min(1, colorValue));
    return Math.round(255 * clampedColorValue).toString(16).padStart(2, '0');
  };
  const hexString = `0x${f(0)}${f(8)}${f(4)}`;
  return parseInt(hexString);
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !vantaEffect && vantaRef.current) {
      const computedStyle = getComputedStyle(document.documentElement);
      
      let primaryColorHex = 0x8A8AFF; // Default: Darker Soft Lavender
      try {
        const primaryHslString = computedStyle.getPropertyValue('--primary').trim();
        if (primaryHslString) {
          const [h, s, l] = parseHslString(primaryHslString);
          primaryColorHex = hslToHexNumber(h, s, l);
        }
      } catch (e) {
        console.error("Failed to parse primary color for Vanta, using default.", e);
      }

      let backgroundColorHex = 0xF5F5F5; // Default: Light Gray
      try {
        const backgroundHslString = computedStyle.getPropertyValue('--background').trim();
        if (backgroundHslString) {
          const [h, s, l] = parseHslString(backgroundHslString);
          backgroundColorHex = hslToHexNumber(h, s, l);
        }
      } catch (e) {
        console.error("Failed to parse background color for Vanta, using default.", e);
      }
      
      const effect = TOPOLOGY({ 
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: primaryColorHex,
        backgroundColor: backgroundColorHex,
      });
      setVantaEffect(effect);
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
