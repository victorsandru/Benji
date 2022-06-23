const dummyGoals = [
  {
    name: "Save for a new laptop",
    goalAmount: 5000,
    savedAmount: 2000,
    autosaveAmount: 400,
    subgoals: [
      {
        name: "Laptop",
        goalAmount: 1800,
        savedAmount: 1200,
      },
      {
        name: "Mouse",
        goalAmount: 70,
        savedAmount: 150,
      },
      {
        name: "Case",
        goalAmount: 30,
        savedAmount: 50,
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
