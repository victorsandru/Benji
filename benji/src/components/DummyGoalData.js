const dummyGoals = [
  {
    name: "Save for a new laptop",
    goalAmount: 2000,
    savedAmount: 1300,
    autosaveAmount: 125,
    subgoals: [
      {
        name: "Laptop",
        goalAmount: 1800,
        savedAmount: 1200,
      },
      {
        name: "Mouse",
        goalAmount: 150,
        savedAmount: 70,
      },
      {
        name: "Case",
        goalAmount: 50,
        savedAmount: 30,
      },
    ],
    savingsHistory: [
      {
        month: "Feb",
        year: "2022",
        savedAmount: 425,
      },
      {
        month: "Mar",
        year: "2022",
        savedAmount: 0,
      },
      {
        month: "Apr",
        year: "2022",
        savedAmount: 180,
      },
      {
        month: "May",
        year: "2022",
        savedAmount: 250,
      },
      {
        month: "Jun",
        year: "2022",
        savedAmount: 150,
      },
    ],
  },
];

export default dummyGoals;
