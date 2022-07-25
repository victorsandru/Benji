import drawPieChart from "./drawPieChart";
import { useEffect, useRef, useState } from "react";

/**
 * This component renders a pie chart using D3.
 *
 * Accepts data, size and segment colors as props.
 * */
const BudgetPieChart = (props) => {
  // Trigger opacity transition for the label inside the pie chart
  const [opacity, setOpacity] = useState(0);
  useEffect(() => setOpacity(1), []);

  // Define container style
  const ChartContainerStyle = {
    width: props.width,
    height: props.height,
    margin: "3.5% 0 1.5% 2.5%",
    position: "relative",
  };

  const containerRef = useRef();
  useEffect(() => {
    drawPieChart(containerRef.current, props.data, props.colors);
  }, [containerRef]);

  return (
    <div style={ChartContainerStyle} ref={containerRef}>
      <div style={{ opacity, transition: "opacity 0.7s ease-in" }}>
        {props.children}
      </div>
    </div>
  );
};

export default BudgetPieChart;
