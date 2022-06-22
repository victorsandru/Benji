/*
 * This element provides a card for each of the summary stats.
 */
import "./SummaryCard.css";
import "../Goals.css";

const SummaryCard = (props) => {
  return (
    <div className={"summary-card"}>
      <h1 className={"data"}>{props.data}</h1>
      <h3 className={"category"}>{props.category}</h3>
    </div>
  );
};

export default SummaryCard;
