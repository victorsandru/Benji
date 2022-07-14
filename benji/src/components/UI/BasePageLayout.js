/*
 * This component render the base layout for the page.
 */

import { Fragment } from "react";
import "./BasePageLayout.css";
import TopNavigationBar from "./TopNavigationBar";
import SideBar from "./SideBar";
import styled from "styled-components";
import Gradient2 from "./Gradient2";

// Empty element for making one of the gradients available for all svg icons
const IconGradient = styled.svg`
  height: 0;
  width: 0;
`;

const BasePageLayout = (props) => {
  return (
    <Fragment>
      <TopNavigationBar />
      <main>
        <SideBar />
        <div className={"sections"}>{props.children}</div>
      </main>
      <IconGradient>
        <defs>
          <Gradient2 />
        </defs>
      </IconGradient>
    </Fragment>
  );
};

export default BasePageLayout;
