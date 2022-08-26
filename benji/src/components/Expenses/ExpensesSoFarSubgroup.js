import ProgressBar from "../ProgressBar";
import styles from "./ExpensesSoFarSubgroup.module.css";

const ExpensesSoFarSubgroup = (props) => {
  return (
    <div className={styles.container}>
      <ProgressBar
        progress={props.progress}
        savedAmount={props.saved}
        goalAmount={props.goal}
        barType={"goal-card-large"}
        barFill={"var(--gradient-1)"}
      />
    </div>
  );
};

export default ExpensesSoFarSubgroup;
