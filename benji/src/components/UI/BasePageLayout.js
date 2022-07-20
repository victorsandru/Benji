/*
 * This component render the base layout for the page.
 */

import { Fragment } from "react";
import "./BasePageLayout.css";
import TopNavigationBar from "./TopNavigationBar";
import SideBar from "./SideBar";

const BasePageLayout = (props) => {
  return (
    <Fragment>
      <TopNavigationBar />
      <main>
        <SideBar />
        <div className={"sections"}>{props.children}</div>
      </main>
    </Fragment>
  );
};

export default BasePageLayout;
