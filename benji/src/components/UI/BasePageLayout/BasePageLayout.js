import { Fragment } from "react";
import "./BasePageLayout.css";
import TopNavigationBar from "../TopNavigationBar";
import SideBar from "../SideBar";

/**
 * This component render the base layout for the page.
 *
 * This component will accept an array of CSS classes for styling
 * the container that wraps the main content of the home page.
 */
const BasePageLayout = (props) => {
  return (
    <Fragment>
      <TopNavigationBar />
      <main>
        <SideBar />
        <div className={props.classes?.join(" ")}>{props.children}</div>
      </main>
    </Fragment>
  );
};

export default BasePageLayout;
