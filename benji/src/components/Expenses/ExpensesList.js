import React, { useState } from 'react';

import styles from "./ExpensesList.module.css";
import ExpensesListRow from "./ExpensesListRow";
import SortButton from "../UI/SortButton";
import {
  ExpensesListNextButton,
  ExpensesListPrevButton,
} from "./ExpensesListButtons";

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
    name: "KFC",
    cost: 23.99,
    date: new Date("August 19, 2022"),
  },
];

const ExpensesList = (props) => {
  const start = 0;
  const end = 11;

  const [dataFiltered, setDataFiltered] = useState([start, end]);

  const NextButtonOnClickHandler = () => {
    console.log("next 11");
    start += 11;
    end += 11;
    setDataFiltered = [start, end];
  };

  const PrevButtonOnClickHandler = () => {
    if (start - 11 < 0) {
      console.log("cannot go further back");
      return;
    } else {
      start -= 11;
      end -= 11;
      setDataFiltered = [start, end];
      console.log("filtered 11 back");
    }
  };

  var data = DUMMY_INFO.slice(dataFiltered[0], dataFiltered[1]);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.listHeader}>Overall Spending</h1>
        <SortButton />
      </div>
      <div className={styles.listContainer}>
        {data.map((data) => (
          <ExpensesListRow name={data.name} cost={data.cost} date={data.date} />
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        <ExpensesListPrevButton onClick={PrevButtonOnClickHandler} />
        <ExpensesListNextButton onClick={NextButtonOnClickHandler} />
      </div>
    </div>
  );
};

export default ExpensesList;
