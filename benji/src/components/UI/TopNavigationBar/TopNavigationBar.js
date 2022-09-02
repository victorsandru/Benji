import "./TopNavigationBar.css";
import { useLocation } from "react-router-dom";

/**
 * This element shows up as a colored bar at the top of the page.
 * Takes styles object as props which defines the header style.
 */
const TopNavigationBar = (props) => {
  const { pathname } = useLocation();
  const message = (() => {
    switch (pathname.slice(1)) {
      case "expenses":
        return "Your Expenses";
      case "budget":
        return "Your Budget";
      case "goals":
        return "Your Goals";
      case "calendar":
        return "Your Calendar";
      default:
        return "Welcome!";
    }
  })();

  return (
    <header className={"navigation-header"} style={props.styles}>
      <h1 className={"app-name"}>Benji</h1>
      <h1 className={"navigation-message"}>{message}</h1>
    </header>
  );
};

export default TopNavigationBar;
