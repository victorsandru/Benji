export default function SquareIcon({ classes = [] }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.join(" ")}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 7H7V18H18V7ZM5 4V20H20V5H5Z"
        fill="currentColor"
      />
    </svg>
  );
}
