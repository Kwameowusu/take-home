

import { SVGAttributes } from "react"

export const ChartBarIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="chart bar icon"
    >
      <path
        d="M7.5 15.8333V10.8333C7.5 9.91286 6.75381 9.16667 5.83333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H5.83333C6.75381 17.5 7.5 16.7538 7.5 15.8333ZM7.5 15.8333V7.5C7.5 6.57953 8.24619 5.83333 9.16667 5.83333H10.8333C11.7538 5.83333 12.5 6.57953 12.5 7.5V15.8333M7.5 15.8333C7.5 16.7538 8.24619 17.5 9.16667 17.5H10.8333C11.7538 17.5 12.5 16.7538 12.5 15.8333M12.5 15.8333V4.16667C12.5 3.24619 13.2462 2.5 14.1667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H14.1667C13.2462 17.5 12.5 16.7538 12.5 15.8333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
