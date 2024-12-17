import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  const [isLargerScreen, setIsLargerScreen] = useState(window.innerWidth > 600);

  useEffect (() => {
    const handleResize = () => {
      setIsLargerScreen(window.innerWidth > 600);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      {
        isLargerScreen && (
          <Search
            placeholder="Search a album of your choice"
            searchData={searchData}
          />
        )
      }
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
