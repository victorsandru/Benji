import "./ProgressBar.css";

/**
 * This component will display the progress bar.
 *
 * It accepts classnames for defining bar size and fill.
 */
const ProgressBar = (props) => {
  return (
    <div className={`bar-container ${props.barType}`}>
      <div className={`bar-bg ${props.barType}`}>
        <div
          className={`bar ${props.barType}`}
          style={{
            width: `${props.progress}%`,
          }}
        >
          <p
            className={`saved-amount ${props.barType}`}
          >{`$${props.savedAmount.toLocaleString("en-US")}`}</p>
        </div>
      </div>
      <p
        className={`total-amount ${props.barType}`}
      >{`$${props.goalAmount.toLocaleString("en-US")}`}</p>
    </div>
  );
};

export default ProgressBar;
