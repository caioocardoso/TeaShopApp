import React from "react";
import { s } from "react-native-size-matters";
import Svg, {
  Rect,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

interface Props {
  size?: number;
}

export default function CreditCardIcon({ size = s(64) }: Props) {
  return (
    <Svg
      width={size}
      height={(size * 64) / 96}
      viewBox="0 0 96 64"
      fill="none"
    >
      <Defs>
        <LinearGradient id="card" x1="0" y1="0" x2="96" y2="64">
          <Stop offset="0%" stopColor="#5E7463" />
          <Stop offset="100%" stopColor="#4A5D4E" />
        </LinearGradient>
      </Defs>

      {/* Corpo */}
      <Rect
        x="2"
        y="2"
        width="92"
        height="60"
        rx="8"
        fill="url(#card)"
      />

      {/* Faixa */}
      <Rect
        x="2"
        y="10"
        width="92"
        height="10"
        fill="#35463A"
      />

      {/* Chip */}
      <Rect
        x="12"
        y="26"
        width="14"
        height="11"
        rx="2"
        fill="#D47A22"
      />

      <Path
        d="M19 26V37M12 31.5H26M15.5 26V37M22.5 26V37"
        stroke="#F4C38C"
        strokeWidth="0.8"
      />

      {/* Número */}
      <Rect
        x="32"
        y="29"
        width="10"
        height="2.4"
        rx="1.2"
        fill="#FDFBF7"
        opacity={0.95}
      />

      <Rect
        x="45"
        y="29"
        width="10"
        height="2.4"
        rx="1.2"
        fill="#FDFBF7"
        opacity={0.95}
      />

      <Rect
        x="58"
        y="29"
        width="10"
        height="2.4"
        rx="1.2"
        fill="#FDFBF7"
        opacity={0.95}
      />

      {/* Nome */}
      <Rect
        x="12"
        y="46"
        width="28"
        height="2.5"
        rx="1.2"
        fill="#FDFBF7"
        opacity={0.8}
      />

      {/* Elemento decorativo */}
      <Circle
        cx="75"
        cy="46"
        r="6"
        fill="#D47A22"
      />

      <Circle
        cx="81"
        cy="46"
        r="6"
        fill="#E8A055"
        opacity={0.85}
      />
    </Svg>
  );
}