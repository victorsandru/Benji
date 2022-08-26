import TriangleIcon from "../Icons/TriangleIcon";
import styles from "./SortButton.module.css";

const SortButton = (props) => {
  return (
    <button className={`${styles.actionBtn} ${props.className}`}>
      <div className={styles.svgContainerSort}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="-1 -4 18 18"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4h12M3 6h9m-9 2h6m-6 2h5"
          />
        </svg>
      </div>
      Sort
      <TriangleIcon />
    </button>
  );
};

export default SortButton;
