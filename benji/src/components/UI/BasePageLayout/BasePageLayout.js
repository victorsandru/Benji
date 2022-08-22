import { Fragment } from "react";
import "./BasePageLayout.css";
import TopNavigationBar from "../TopNavigationBar";
import SideBar from "../SideBar";

/**
 * This component render the base layout for the page.
 *
 * This component will accept an array of CSS classes for styling
 * the container that wraps the main content of the home page. It
 * also accepts the CSS styles for the main element and TopNavigationBar.
 */
const BasePageLayout = ({
  classes,
  pageMinWidth = "100%",
  children = null,
}) => {
  return (
    <Fragment>
      <TopNavigationBar
        styles={{
          minWidth: pageMinWidth,
        }}
      />
      <main
        style={{
          minWidth: pageMinWidth,
        }}
      >
        <SideBar />
        <div className={classes?.join(" ")}>{children}</div>
      </main>
    </Fragment>
  );
};

export default BasePageLayout;
