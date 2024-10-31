import { Footer } from "../footer/Footer";
import { NavBar } from "../home/Navbar";
import { FaPaperPlane } from "react-icons/fa";
import { MdClear } from "react-icons/md"; // Importing MdClear icon
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React, { useState } from "react";
import ActiveLastBreadcrumb from "../Order/ActiveLastBreadcrumb";
import { BasicMap } from "./BasicMap";
// import { Map } from "./Map";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const Restuarant = () => {
  const [address, setAddress] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocused = (e) => {
    setAddress(e.target.value);
    setIsFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", address);
  };

  return (
    <>
      <NavBar />
      <section className="sidenav">
        <div className="sidebar">
          <div
            role="presentation"
            onClick={handleClick}
            className="breadcrumb1"
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="#502314" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="#d62300"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Restaurant
              </Link>
            </Breadcrumbs>
          </div>

          <div className="form">
            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="text"
                placeholder="Please Enter Your Location"
                value={address}
                onChange={handleFocused}
                className="search-input"
              />
              <button type="submit" className="search-button">
                {address !== "" ? (
                  <MdClear size={24} onClick={() => setAddress("")} />
                ) : (
                  <FaPaperPlane size={24} />
                )}
              </button>
            </form>
          </div>

          <div className="fgb-header">
            <h2 className="fgb-title2">Restaurant</h2>
          </div>
        </div>

        <BasicMap />
        {/* <Map /> */}
      </section>
      <Footer />
    </>
  );
};
