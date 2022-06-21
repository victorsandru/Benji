/*
 * This element shows up as a colored bar at the top of the page.
 */

import classes from "./TopNavigationBar.module.css";
import "../Goals.css";

const TopNavigationBar = () => {
  return (
    <header className={"gradient-1-background"}>
      <h1 className={classes.appName}>Benji</h1>
    </header>
  );
};

export default TopNavigationBar;
