import styles from "./ExpensesList.module.css";
import ExpensesListRow from "./ExpensesListRow";

const DUMMY_INFO = [
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
  {
    name: "McDonalds",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
];

const ExpensesList = (props) => {
  const start = 0;
  const end = 11;
  const data = DUMMY_INFO.slice(start, end);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.listHeader}>Overall Spending</h1>
        <h1 className={styles.listHeader}>Sort Button</h1>
      </div>
      <div className={styles.listContainer}>
        {data.map((data) => (
          <ExpensesListRow name={data.name} cost={data.cost} date={data.date} />
        ))}
      </div>
    </div>
  );
};

export default ExpensesList;
