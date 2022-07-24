import drawPieChart from "./DrawPieChart";
import { useEffect, useRef } from "react";

/**
 * This component renders a pie chart using D3.
 *
 * Accepts data and size as props.
 * */
const BudgetPieChart = (props) => {
  // Define container style
  const ChartContainerStyle = {
    width: props.width,
    height: props.height,
    margin: "2.5% 0 2.5% 2.5%",
    position: "relative",
  };

  const data = [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 },
  ];

  // Array of colors that will be used for styling segments
  const colors = ["#05BBD2", "#2070C4", "#EB80F1", "#F5C842", "#37D400"];

  const containerRef = useRef();
  useEffect(() => {
    drawPieChart(containerRef.current, data, colors);
  }, [containerRef]);

  return (
    <div style={ChartContainerStyle} ref={containerRef}>
      <div>{props.children}</div>
    </div>
  );
};

export default BudgetPieChart;
