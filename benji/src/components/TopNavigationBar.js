/*
 * This element shows up as a colored bar at the top of the page.
 */

import "./TopNavigationBar.css";
import "../pages/Goals.css";

const TopNavigationBar = () => {
  return (
    <header className={"navigation-header"}>
      <h1 className={"app-name"}>Benji</h1>
    </header>
  );
};

export default TopNavigationBar;
