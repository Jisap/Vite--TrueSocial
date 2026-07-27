import { useId } from "react";

/**
 * Renders text bent around a circle and spinning continuously, using
 * native SVG <textPath> instead of jquery.circleType.js. The rotation
 * keyframe (24s linear infinite) is ported directly from the original
 * ".rotate-me" animation so the spin speed is unchanged.
 */


const CircularText = ({ text = "", size = 140, className = "" }) => {

  const pathId = `circular-text-path-${useId()}`;
  const radius = size / 2 - 10;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={`animate-rotate-me ${className}`.trim()}
      aria-hidden="true"
    >
      <defs>
        <path
          id={pathId}
          d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius}, ${radius} 0 1, 1 ${radius * 2}, 0 a ${radius}, ${radius} 0 1,1 -${radius * 2},0`}
        />


      </defs>

      <text fill="currentColor" fontSize="14" letterSpacing="2">
        <textPath href={`#${pathId}`}>
          {text}
        </textPath>
      </text>
    </svg>
  )
}

export default CircularText