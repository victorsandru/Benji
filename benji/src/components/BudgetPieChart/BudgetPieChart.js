import { PieChart } from "react-minimal-pie-chart";
import { useEffect, useRef, useState } from "react";

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
  const data = props.data.map((entry, i) => ({
    title: entry.title,
    value: +entry.value,
    color: hovered === i ? "lightgray" : entry.color,
  }));

  // Animate appearance of the label in the pie chart center
  const centerLabelRef = useRef();
  useEffect(() => {
    centerLabelRef.current.style.opacity = 1;
  }, []);

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
        segmentsStyle={{ transition: "stroke 0.5s", cursor: "pointer" }}
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
      >
        <defs>{props.data.map((category) => category.linearGradientEl)}</defs>
      </PieChart>

      <div
        className={"budget-pie-chart-center-label"}
        style={{
          opacity: 0,
          transition: "opacity 0.5s",
        }}
        ref={centerLabelRef}
      >
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
