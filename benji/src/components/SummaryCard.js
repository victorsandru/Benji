/*
 * This element provides a card for each of the summary stats.
 */
import "./SummaryCard.css";
import "../Goals.css";

const SummaryCard = (props) => {
  return (
    <div className={"summary-card gradient-2-background"}>
      <h1>{props.data}</h1>
      <h3>{props.category}</h3>
    </div>
  );
};

export default SummaryCard;
