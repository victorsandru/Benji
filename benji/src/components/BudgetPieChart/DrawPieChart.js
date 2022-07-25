import * as d3 from "d3";
import hexToRgba from "hex-to-rgba";

/**
 * This function creates the svg element containing pie chart using D3.
 *
 * @param {object} container - The parent element inside which the pie chart will be rendered.
 * @param {array} data - The array of objects containing values displayed on pie chart.
 * @param {array} colors - The array containing colors used for coloring segments of the pie chart.
 *
 * Source: https://medium.com/tinyso/how-to-create-pie-donut-chart-in-react-using-d3-js-9ea695bcf819
 */
const drawPieChart = (container, data, colors) => {
  // Clear previously rendered svg element
  d3.select(container).select("svg").remove();

  const svg = d3
    .select(container)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr(
      "viewBox",
      `0 0 ${container.clientWidth} ${container.clientHeight * 1.04}`
    )
    .append("g")
    .attr(
      "transform",
      `translate(${Math.ceil(container.clientWidth / 2)}, ${Math.ceil(
        container.clientHeight / 2
      )})`
    );

  const arcGenerator = d3
    .arc()
    .cornerRadius(15)
    .padAngle(0.035)
    .innerRadius(Math.min(container.clientWidth, container.clientHeight) / 4)
    .outerRadius(Math.min(container.clientWidth, container.clientHeight) / 2);

  const pieGenerator = d3.pie().value((category) => category.percentage);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style(
      "fill",
      (category) => `url(#pieChartGradient${category.data.colorIndex})`
    )
    .attr("filter", "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25))")
    .transition()
    .duration(700)
    .attrTween("d", function (d) {
      const i = d3.interpolate(d.startAngle, d.endAngle);
      return function (t) {
        d.endAngle = i(t);
        return arcGenerator(d);
      };
    });
  // Define customer attributes
  let defs = svg.append("defs");

  // Add custom gradients
  colors.forEach((color, index) => {
    const lg = defs
      .append("linearGradient")
      .attr("id", `pieChartGradient${index}`)
      .attr("gradientTransform", "rotate(0)");
    lg.append("stop")
      .attr("offset", "17%")
      .style("stop-color", hexToRgba(color, "1"));
    lg.append("stop")
      .attr("offset", "95%")
      .style("stop-color", hexToRgba(color, "0.83"));
  });
};

export default drawPieChart;
