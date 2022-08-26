import ChevronRight from "../Icons/ChevronRight";
import ChevronLeft from "../Icons/ChevronLeft";
import styles from "./ExpensesListButtons.module.css";

const ExpensesListNextButton = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      <ChevronRight className={styles.chevron} />
    </button>
  );
};

const ExpensesListPrevButton = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      <ChevronLeft className={styles.chevron} />
    </button>
  );
};

export { ExpensesListNextButton, ExpensesListPrevButton };
