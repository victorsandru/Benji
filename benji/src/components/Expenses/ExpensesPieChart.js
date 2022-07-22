import { PieChart } from "react-minimal-pie-chart";
import { useState } from "react";

const ExpensesPieChart = (props) => {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);

  const data = props.data.map((entry, i) => {
    // when hovered settings
    if (hovered === i) {
      return {
        ...entry,
        color: entry.color + '80',
      };
    }
    return entry;
  });

  const lineWidth = 30;

  return (
    <PieChart
      data={data}
      radius={PieChart.defaultProps.radius - 6}
      segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
      segmentsShift={(index) => (index === selected ? 6 : 1)}
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
  );
};

export default ExpensesPieChart;
