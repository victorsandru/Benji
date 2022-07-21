/**
 * This element shows up as a blurred background container.
 *
 * The styles for individual elements are defined in the parent component.
 */

import "./Section.css";

const Section = (props) => {
  return (
    <section style={props.sectionStyle}>
      <div className={"background-blur"} />
      {props.children}
    </section>
  );
};

export default Section;
