import logo from "../assets/Burger-King-logo.svg";

export default NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <div className="logo">
            <img src={logo} alt="Burger King Logo" />
          </div>
        </ul>
      </nav>
    </>
  );
};
