import * as d3 from "d3";

/**
 * This function creates the svg element containing pie chart using D3.
 *
 * @param {object} container - The parent element inside which the pie chart will be rendered.
 *
 * */
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
      `translate(${Math.ceil(container.clientWidth / 2)} , ${Math.ceil(
        container.clientHeight / 2
      )})`
    );

  const arcGenerator = d3
    .arc()
    .cornerRadius(15)
    .padAngle(0.035)
    .innerRadius(Math.min(container.clientWidth, container.clientHeight) / 4)
    .outerRadius(Math.min(container.clientWidth, container.clientHeight) / 2);

  const pieGenerator = d3.pie().value((category) => category.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length])
    .attr("filter", "url(#dropshadow)");

  /* For the drop shadow filter... */
  var defs = svg.append("defs");

  var filter = defs.append("filter").attr("id", "dropshadow");

  filter
    .append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 1)
    .attr("result", "blur");
  filter
    .append("feOffset")
    .attr("in", "blur")
    .attr("dx", 2)
    .attr("dy", 2)
    .attr("result", "offsetBlur");

  var feMerge = filter.append("feMerge");

  feMerge.append("feMergeNode").attr("in", "offsetBlur");
  feMerge.append("feMergeNode").attr("in", "SourceGraphic");
};

export default drawPieChart;
