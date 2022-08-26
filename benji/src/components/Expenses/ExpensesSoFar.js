import styles from "./ExpensesSoFar.module.css";
import ExpensesSoFarSubgroup from "./ExpensesSoFarSubgroup";
const DUMMY_DATA = [
  {
    subgroupName: "Groceries",
    saved: 100,
    goal: 500,
    progress: calculateProgress(0),
  },
  {
    subgroupName: "Fun",
    saved: 70,
    goal: 150,
    progress: calculateProgress(1),
  },
];

const calculateProgress = (index) => {
  return Math.round((DUMMY_DATA[index].saved / DUMMY_DATA[index].goal) * 100)
};

const ExpensesSoFar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>This month so far...</div>
      <ExpensesSoFarSubgroup
        saved={DUMMY_DATA[0].saved}
        goal={DUMMY_DATA[0].goal}
        progress={DUMMY_DATA[0].progress}
      />
      <ExpensesSoFarSubgroup
        saved={DUMMY_DATA[1].saved}
        goal={DUMMY_DATA[1].goal}
        progress={DUMMY_DATA[1].progress}
      />
    </div>
  );
};

export default ExpensesSoFar;
