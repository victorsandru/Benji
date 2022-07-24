import styles from "./ExpensesListRow.module.css";

const ExpensesListRow = (props) => {
  const date = props.date.toISOString().split("T");
  return (
    <>
      <div className={styles.rowContainer}>
        <div className={styles.rowTitle}>{props.name}</div>
        <div className={styles.rowCost}>{props.cost}</div>
        <div className={styles.rowDate}>{date[0]}</div>
      </div>
      <div className={styles.line} />
    </>
  );
};

export default ExpensesListRow;
