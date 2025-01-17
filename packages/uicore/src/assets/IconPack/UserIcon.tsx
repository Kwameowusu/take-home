import { SVGAttributes } from "react";

export const UserIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3334 5.83333C13.3334 7.67428 11.841 9.16667 10.0001 9.16667C8.15913 9.16667 6.66675 7.67428 6.66675 5.83333C6.66675 3.99238 8.15913 2.5 10.0001 2.5C11.841 2.5 13.3334 3.99238 13.3334 5.83333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0001 11.6667C6.77842 11.6667 4.16675 14.2783 4.16675 17.5H15.8334C15.8334 14.2783 13.2217 11.6667 10.0001 11.6667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
