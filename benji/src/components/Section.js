/*
 * This element shows up as a blurred background container.
 */

import "./Section.css";

const Section = ({ className, children }) => {
  return (
    <section className={className}>
      <div className={"container background-blur"} />
      <div className={"container"}>{children}</div>
    </section>
  );
};

export default Section;
