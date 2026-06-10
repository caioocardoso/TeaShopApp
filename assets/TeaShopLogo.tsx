import * as React from "react";
import Svg, { G, Ellipse, Path, Circle, SvgProps } from "react-native-svg";
const TeaShopLogo = (props: SvgProps) => (
  <Svg
    viewBox="0 0 800 800"
    width="100%"
    height="100%"
    {...props}
  >
    <G transform="translate(400, 430)">
      <Ellipse cx={0} cy={190} rx={140} ry={20} fill="#f0f0f0" opacity={0.8} />
      <Path
        d="M -160,160 C -160,195 160,195 160,160 C 140,145 -140,145 -160,160 Z"
        fill="#ffffff"
        stroke="#e6e6e6"
        strokeWidth={2}
      />
      <Path
        d="M -160,160 C -100,175 100,175 160,160"
        fill="none"
        stroke="#dedede"
        strokeWidth={1.5}
      />
      <Path
        d="M -90,-10 C -160,-20 -170,90 -95,80 C -115,75 -125,5 -85,5 Z"
        fill="#f9f9f9"
        stroke="#e0e0e0"
        strokeWidth={1.5}
      />
      <Path
        d="M -100,-20 C -110,80 -60,160 0,160 C 60,160 110,80 100,-20 C 80,-15 0,-10 -100,-20 Z"
        fill="#ffffff"
        stroke="#e6e6e6"
        strokeWidth={2}
      />
      <Path
        d="M -100,-20 C -110,80 -60,160 0,160 C -40,160 -80,90 -85,-20 Z"
        fill="#f5f5f5"
        opacity={0.7}
      />
      <Path
        d="M 100,-20 C 110,80 60,160 0,160 C 40,160 80,90 85,-20 Z"
        fill="#ebebeb"
        opacity={0.4}
      />
      <Ellipse
        cx={0}
        cy={-20}
        rx={100}
        ry={18}
        fill="#ffffff"
        stroke="#e0e0e0"
        strokeWidth={1.5}
      />
      <Ellipse cx={0} cy={-17} rx={94} ry={15} fill="#d47a22" />
      <Ellipse cx={2} cy={-15} rx={90} ry={13} fill="#e5933a" opacity={0.9} />
      <Path
        d="M -50,-20               C -70,-120 -20,-240 40,-310               C 70,-345 90,-350 95,-320               C 100,-280 40,-210 20,-160               C 5,-120 20,-60 50,-18"
        fill="#d47a22"
      />
      <Path
        d="M -35,-20               C -55,-110 -10,-220 45,-295               C 65,-320 75,-325 78,-305               C 80,-275 35,-210 15,-160               C 0,-125 10,-70 35,-19"
        fill="#f4ad57"
        opacity={0.85}
      />
      <Path
        d="M 95,-360 C 90,-380 110,-390 110,-370 C 110,-350 100,-345 95,-360 Z"
        fill="#e5933a"
      />
      <Path
        d="M 50,-340 C 47,-352 60,-358 60,-345 C 60,-332 53,-328 50,-340 Z"
        fill="#d47a22"
      />
      <Circle cx={120} cy={-330} r={5} fill="#f4ad57" />
      <Circle cx={15} cy={-270} r={7} fill="#e5933a" />
      <Circle cx={-15} cy={-210} r={6} fill="#d47a22" />
      <Circle cx={75} cy={-220} r={4} fill="#f4ad57" />
      <Circle cx={105} cy={-260} r={5.5} fill="#e5933a" />
      <Circle cx={128} cy={-305} r={3} fill="#d47a22" />
      <Circle cx={-5} cy={-160} r={4} fill="#f4ad57" />
    </G>
  </Svg>
);
export default TeaShopLogo;
