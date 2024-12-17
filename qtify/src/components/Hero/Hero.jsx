import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import styles from "./Hero.module.css";

function Hero({ searchData }) {
  const [isSmallerScreen, setIsSmallerScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  return (
    <div className={`${isSmallerScreen ? styles['heroContainer'] : ''}`}>
      <div className={styles.hero}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img
            src={require("../../assets/hero_headphones.png")}
            style={{ width: 'clamp(175px, 20vw, 212px)' }}
            alt="headphones"  
          />
        </div>
      </div>
      {
        isSmallerScreen && (
          <Search
            placeholder="Search a album of your choice"
            searchData={searchData}
          />
        )
      }
    </div>
  );
}

export default Hero;
