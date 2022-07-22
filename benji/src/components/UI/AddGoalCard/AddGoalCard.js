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
