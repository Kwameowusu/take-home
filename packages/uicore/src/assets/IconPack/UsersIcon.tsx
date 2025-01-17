import { SVGAttributes } from "react";

export const UsersIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      aria-labelledby="users icon"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 5.80557C16.9773 4.69834 18.4071 4 20 4C22.9455 4 25.3333 6.38781 25.3333 9.33333C25.3333 12.2789 22.9455 14.6667 20 14.6667C18.4071 14.6667 16.9773 13.9683 16 12.8611M20 28H4V26.6667C4 22.2484 7.58172 18.6667 12 18.6667C16.4183 18.6667 20 22.2484 20 26.6667V28ZM20 28H28V26.6667C28 22.2484 24.4183 18.6667 20 18.6667C18.5429 18.6667 17.1767 19.0562 16 19.7369M17.3333 9.33333C17.3333 12.2789 14.9455 14.6667 12 14.6667C9.05448 14.6667 6.66667 12.2789 6.66667 9.33333C6.66667 6.38781 9.05448 4 12 4C14.9455 4 17.3333 6.38781 17.3333 9.33333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
