import "./TopNavigationBar.css";

/**
 * This element shows up as a colored bar at the top of the page.
 * Takes styles object as props which defines the header style.
 */
const TopNavigationBar = (props) => {
  return (
    <header className={"navigation-header"} style={props.styles}>
      <h1 className={"app-name"}>Benji</h1>
    </header>
  );
};

export default TopNavigationBar;
