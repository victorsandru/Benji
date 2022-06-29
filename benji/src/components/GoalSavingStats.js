/*
 * This component will render a history which displays monthly savings over the last several months.
 */

import "./GoalSavingStats.css";

const GoalSavingStats = (props) => {
  // Determine largest and smallest savings in the history
  let { maxSaving, minSaving } = props.savingsHistory.reduce(
    (maxMinSavings, saving) => {
      if (saving.savedAmount > maxMinSavings.maxSaving)
        maxMinSavings.maxSaving = saving.savedAmount;
      else if (saving.savedAmount < maxMinSavings.minSaving)
        maxMinSavings.minSaving = saving.savedAmount;
      return maxMinSavings;
    },
    {
      maxSaving: 0,
      minSaving: 0,
    }
  );

  // Determine the difference between labels
  let labelDiff = Math.ceil((maxSaving - minSaving) / 60) * 10;
  // Create an array with 6 labels
  let labels = Array.from({ length: 6 }, (v, i) => i * labelDiff).reverse();
  // Determine the maximum that can be displayed
  let labelSpan = labels[0] + labelDiff / 2;

  return (
    <div className={"savings-info"}>
      <div className={"histogram"}>
        <div className={"markup"}>
          {labels.map((label, index) => (
            <div
              className={"line-label"}
              key={Math.random()}
              style={{
                opacity: `${index === 5 ? "0" : "100%"}`,
              }}
            >
              <span className={"line"} />
              <p className={"label"}>${label}</p>
            </div>
          ))}
        </div>
        <div className={"savings-bars"}>
          {props.savingsHistory.slice(-5).map((saving) => (
            <div className={"savings-bar-month"} key={Math.random()}>
              <div className={"savings-bar"}>
                <span
                  // Disable coloring for the month with $0 savings
                  className={`savings-bar-amount ${
                    saving.savedAmount === 0 ? "no-saving" : ""
                  }`}
                  // Hide the label corresponding to $0
                  style={{
                    height: `${(saving.savedAmount / labelSpan) * 100}%`,
                  }}
                />
              </div>
              <p className={"savings-month"}>{saving.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalSavingStats;
