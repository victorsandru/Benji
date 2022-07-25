import hexToRgba from "hex-to-rgba";

/**
 * This function will map each category in the array to the color index
 * and also create a gradient corresponding to that color.
 */
export default function assignGradient(categories, colors) {
  // Make an array of numbers corresponding to the indices in the original colors array
  const colorsIndices = Array.from({ length: colors.length }, (_, i) => i);

  return categories.map((category, index) => {
    // Determine the color index
    let colorIndex = index % colors.length;

    // Ensure that first color in the array is shifted
    // to avoid neighbouring segments with the same color
    if (index > 0 && index % colors.length === 0) {
      colorsIndices.push(colorsIndices[colorIndex]);
      colorsIndices.splice(colorIndex, 1);
    }

    return {
      ...category,
      colorIndex: colorsIndices[colorIndex],
      linearGradient: `linear-gradient(90deg, ${hexToRgba(
        colors[colorsIndices[colorIndex]],
        "1"
      )} 17%, ${hexToRgba(colors[colorsIndices[colorIndex]], "0.83")}  95%)`,
    };
  });
}
