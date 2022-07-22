/*
 * This component render the base layout for the page.
 *
 * This component will accept an array of CSS classes for styling
 * the container that wraps the main content of the home page.
 */

import { Fragment } from "react";
import "./BasePageLayout.css";
import TopNavigationBar from "./TopNavigationBar";
import SideBar from "./SideBar";

const SectionsStyling = {
  margin: "0 auto",
  height: "100%",
};

const BasePageLayout = (props) => {
  return (
    <Fragment>
      <TopNavigationBar />
      <main>
        <SideBar />
        <div style={SectionsStyling} className={props.classes?.join(" ")}>
          {props.children}
        </div>
      </main>
    </Fragment>
  );
};

export default BasePageLayout;
