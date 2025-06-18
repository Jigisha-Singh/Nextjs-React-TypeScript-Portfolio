
"use client";

import { useEffect, useRef, useState } from 'react';
import CELLS from 'vanta/dist/vanta.cells.min';

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
    return [240, 60, 70]; // Default to primary HSL if parsing fails
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
      
      let primaryColorHex = 0xA99AFF; // Default primary (Soft Lavender - darker shade)
      const primaryHslValues = parseHslString(computedStyle.getPropertyValue('--primary').trim());
      if (primaryHslValues) {
        primaryColorHex = hslToHexNumber(...primaryHslValues);
      } else {
        console.error("Failed to parse primary color for Vanta, using default.");
      }

      let accentColorHex = 0xFFD1DC; // Default accent (Pale Pink)
      const accentHslValues = parseHslString(computedStyle.getPropertyValue('--accent').trim());
      if (accentHslValues) {
        accentColorHex = hslToHexNumber(...accentHslValues);
      } else {
        console.error("Failed to parse accent color for Vanta, using default.");
      }
      
      let backgroundColorHex = 0xF5F5F5; // Default background (Light Gray)
      const backgroundHslValues = parseHslString(computedStyle.getPropertyValue('--background').trim());
      if (backgroundHslValues) {
        backgroundColorHex = hslToHexNumber(...backgroundHslValues);
      } else {
        console.error("Failed to parse background color for Vanta, using default.");
      }
      
      const effect = CELLS({ 
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color1: primaryColorHex,
        color2: accentColorHex,
        backgroundColor: backgroundColorHex,
        size: 3.00,
        speed: 1.00,
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
