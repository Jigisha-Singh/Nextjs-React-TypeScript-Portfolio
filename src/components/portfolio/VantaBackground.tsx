
"use client";

import { useEffect, useRef, useState } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import type { VantaBase } from 'vanta/dist/vanta.base';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

// Helper function to parse HSL string "H S% L%" into [H, S, L] numbers
function parseHslString(hslString: string): [number, number, number] | null {
  if (!hslString) return null;
  const parts = hslString.split(' ');
  if (parts.length < 3) {
    console.error(`Invalid HSL string format: ${hslString}`);
    return null;
  }
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1].replace('%', ''));
  const l = parseFloat(parts[2].replace('%', ''));
  
  if (isNaN(h) || isNaN(s) || isNaN(l)) {
    console.error(`Invalid HSL values in string: ${hslString}, using default.`);
    // Default to a fallback primary color HSL if parsing fails to prevent crashes
    return [240, 50, 65]; // Example: A mid-tone lavender
  }
  return [h, s, l];
}

// Helper function to convert HSL to a hex number for Vanta
function hslToHexNumber(h: number, s: number, l: number): number {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  
  const r = Math.round(255 * f(0));
  const g = Math.round(255 * f(8));
  const b = Math.round(255 * f(4));
  return parseInt(`0x${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`);
}


const VantaBackground: React.FC<VantaBackgroundProps> = ({ children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaBase | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !vantaEffect && vantaRef.current && GLOBE) {
      const computedStyle = getComputedStyle(document.documentElement);
      
      let primaryColorHex = 0xA99AFF; 
      const primaryHslString = computedStyle.getPropertyValue('--primary').trim();
      const primaryHslValues = parseHslString(primaryHslString);
      if (primaryHslValues) {
        primaryColorHex = hslToHexNumber(...primaryHslValues);
      } else {
        console.error("Failed to parse primary color for Vanta GLOBE, using default.", primaryHslString);
      }

      let accentColorHex = 0xFFD1DC; 
      const accentHslString = computedStyle.getPropertyValue('--accent').trim();
      const accentHslValues = parseHslString(accentHslString);
      if (accentHslValues) {
        accentColorHex = hslToHexNumber(...accentHslValues);
      } else {
        console.error("Failed to parse accent color for Vanta GLOBE, using default.", accentHslString);
      }
      
      let backgroundColorHex = 0xFFFFFF; // Default to white
      const backgroundHslString = computedStyle.getPropertyValue('--background').trim();
      const backgroundHslValues = parseHslString(backgroundHslString);
      if (backgroundHslValues) {
        backgroundColorHex = hslToHexNumber(...backgroundHslValues);
      } else {
        console.error("Failed to parse background color for Vanta GLOBE, using default.", backgroundHslString);
      }
      
      const effect = GLOBE({ 
        el: vantaRef.current,
        THREE: THREE, 
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: primaryColorHex,      // For GLOBE effect
        color2: accentColorHex,     // For GLOBE effect
        backgroundColor: backgroundColorHex,
        size: 1.0, // Default for GLOBE, adjust as needed
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  // Ensure THREE is stable, though it should be. Add relevant color strings if they might change and need re-init.
  }, [vantaEffect]); 

  return (
    <div ref={vantaRef} className="relative w-full h-full">
      {children}
    </div>
  );
};

export default VantaBackground;
