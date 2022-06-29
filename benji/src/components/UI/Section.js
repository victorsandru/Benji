/*
 * This element shows up as a blurred background container.
 */

import "./Section.css";

const Section = (props) => {
  return (
    <section className={`${props.sectionStyle}`}>
      <div className={"background-blur"} />
      {props.children}
    </section>
  );
};

export default Section;
