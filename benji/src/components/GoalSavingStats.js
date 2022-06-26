/*
 * This component will render a history which displays monthly savings over the last several months.
 */

import "./GoalSavingStats.css";

const GoalSavingStats = (props) => {
  let maxSaving = props.savingsHistory.reduce((maxSaving, saving) =>
    saving.savedAmount > maxSaving.savedAmount ? saving : maxSaving
  );
  let minSaving = props.savingsHistory.reduce((minSaving, saving) =>
    saving.savedAmount < minSaving.savedAmount ? saving : minSaving
  );

  let labelDiff =
    Math.ceil((maxSaving.savedAmount - minSaving.savedAmount) / 50) * 10;
  let labels = Array.from({ length: 6 }, (v, i) => i * labelDiff).reverse();

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
                  className={`savings-bar-amount ${
                    saving.savedAmount === 0 ? "no-saving" : ""
                  }`}
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
