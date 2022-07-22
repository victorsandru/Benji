/*
 * This component will display the progress bar.
 */

import "./ProgressBar.css";

const ProgressBar = (props) => {
  return (
    <div className={`bar-container bar-container-${props.barType}`}>
      <div className={`bar-bg bar-bg-${props.barType}`}>
        <div
          className={`bar bar-fill-${props.barFill}`}
          style={{
            width: `${props.progress}%`,
          }}
        >
          <p
            className={`saved-amount saved-amount-${props.barType}`}
          >{`$${props.savedAmount.toLocaleString("en-US")}`}</p>
        </div>
      </div>
      <p
        className={`total-amount total-amount-${props.barType}`}
      >{`$${props.goalAmount.toLocaleString("en-US")}`}</p>
    </div>
  );
};

export default ProgressBar;
