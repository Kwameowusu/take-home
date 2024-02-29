import { SVGAttributes } from "react"

export const BanIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604M18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604M18.364 18.364L5.63604 5.63604"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};