/*
 * This component renders the triangle icon used in the filter and sort buttons.
 */

const TriangleIcon = ({ clicked = false }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-triangle${clicked ? "-clicked" : ""}`}
    >
      <path
        fillRule="nonzero"
        clipRule="evenodd"
        d="M11.6603 5L3 20H20.3205L11.6603 5ZM11.6603 11L8.19615 17H15.1244L11.6603 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TriangleIcon;
