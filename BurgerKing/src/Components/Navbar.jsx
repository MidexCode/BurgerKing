import logo from "../assets/Burger-King-logo.svg";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Burger King Logo" />
        </div>
        <ul className="navlinks-1">
          <li>
            <a href="#">Order</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Offer</a>
          </li>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
