import * as React from "react";
import { Footer } from "../footer/Footer";
import logo from "../../assets/Burger-King-logo.svg";
import { Link } from "react-router-dom";
// import { Unstable_Popup as Popup } from "@mui/base";

export const Order = () => {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popup" : undefined;

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Burger King Logo" />
          </Link>
        </div>
        <ul className="navlinks-1">
          <li>
            <Link to="/order" className="nav-links">
              Order
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav-links">
              Menu
            </Link>
          </li>
          <li>
            <Link to="offers" className="nav-links">
              Offer
            </Link>
          </li>
          <li>
            <Link to="/restaurants" className="nav-links">
              Restaurants
            </Link>
          </li>
          <li>
            <Link to="/careers" className="nav-links">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/news" className="nav-links">
              News
            </Link>
          </li>

          <li>
            <React.Fragment>
              <button
                type="button"
                aria-describedby={id}
                className="nav-button"
                onClick={handleClick}
              >
                Register
              </button>
              {/* <BasePopup id={id} open={open} anchor={anchor}>
                <div className="CustomPopup">The content of the Popup.</div>
              </BasePopup> */}
            </React.Fragment>
          </li>
        </ul>
      </nav>

      <Footer />
    </>
  );
};

export const NavBar = () => {
  return <></>;
};
