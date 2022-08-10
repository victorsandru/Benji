import { PieChart } from "react-minimal-pie-chart";
import { useEffect, useState } from "react";

/**
 * This component renders a pie chart using react-minimal-pie-chart package.
 *
 * Accepts data, size and segment colors as props.
 * */
const BudgetPieChart = (props) => {
  // Update selected budget category
  const [selected, setSelected] = useState(undefined);
  // Update hovered state for budget categories
  const [hovered, setHovered] = useState(undefined);

  // Pass information about the selected category to the parent component
  useEffect(() => {
    props.onCategorySelect(selected);
  }, [selected]);

  // Change color when hovered
  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: entry.color + "80",
      };
    }
    return entry;
  });

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
      }}
      className={"budget-pie-chart-container"}
    >
      <PieChart
        data={data}
        radius={PieChart.defaultProps.radius - 6}
        lineWidth={55}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        segmentsShift={(index) => (index === selected ? 5 : 2)}
        animate
        onClick={(_, index) => {
          setSelected(index === selected ? undefined : index);
        }}
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(undefined);
        }}
      />

      <div className={"budget-pie-chart-center-label"}>
        <p className={"budget-pie-chart-label-normal"}>Total spent</p>

        <p
          className={"pie-chart-label-highlighted"}
        >{`${props.budgetSpent}%`}</p>
      </div>
    </div>
  );
};

export default BudgetPieChart;

/*
const DUMMY_DATA = [
  { title: "One", value: 10, color: "#8ECAE6" },
  { title: "Two", value: 15, color: "#219EBC" },
  { title: "Three", value: 20, color: "#FF9330" },
];
*/
