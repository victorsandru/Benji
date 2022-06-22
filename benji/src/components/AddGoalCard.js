/*
 * This element provides a button for adding a new goal.
 */
import "./AddGoalCard.css";

const AddGoalCard = () => {
  return (
    <div className={"add-card"}>
      <button className={"add-button"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke={"url(#gradient2)"}
          strokeWidth={0.5}
        >
          <defs>
            <linearGradient id="gradient2">
              <stop offset="5.87%" stopColor="rgba(134, 174, 203, 0.74)" />
              <stop offset="5.88%" stopColor="rgba(134, 174, 203, 0.6956)" />
              <stop offset="93.54%" stopColor="rgba(179, 133, 201, 0.4)" />
            </linearGradient>
          </defs>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddGoalCard;
