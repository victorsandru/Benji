/*
 * This component displays a sidebar at the left.
 */

import { NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className={"sidebar"}>
      <div className={"background-blur"} />
      <div className={"link-container home-link"}>
        <NavLink
          to={"/"}
          id={"home"}
          className={"link"}
          activeClassName={"current-link"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 svg-link"
            viewBox="0 0 20 20"
            fill="url(#gradient2)"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <p>Home</p>
        </NavLink>
      </div>
      <div className={"link-container main-links"}>
        <NavLink
          to={"/expenses"}
          id={"expenses"}
          className={"link"}
          activeClassName={"current-link"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 svg-link"
            viewBox="0 0 20 20"
            fill="url(#gradient2)"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
          <p>Expenses</p>
        </NavLink>
        <NavLink
          to={"/budgets"}
          id={"budgets"}
          className={"link"}
          activeClassName={"current-link"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 svg-link"
            viewBox="0 0 20 20"
            fill="url(#gradient2)"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
          <p>Budgets</p>
        </NavLink>
        <NavLink
          exact
          to={"/goals"}
          id={"goals"}
          className={(isActive) => "link" + (isActive ? " current-link" : "")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 svg-link"
            viewBox="0 0 20 20"
            fill="url(#gradient2)"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p>Goals</p>
        </NavLink>
        <NavLink
          to={"/calendar"}
          id={"calendar"}
          className={"link"}
          activeClassName={"current-link"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 svg-link"
            viewBox="0 0 20 20"
            fill="url(#gradient2)"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <p>Calendar</p>
        </NavLink>
      </div>
      <div className={"link-container settings-link"}>
        <NavLink
          to={"#"}
          id={"settings"}
          className={"link"}
          activeClassName={"current-link"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 svg-link"
            viewBox="0 0 20 20"
            fill="url(#gradient2)"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <p>Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
