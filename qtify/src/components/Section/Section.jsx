import React, { useState } from "react";
import styles from "./Section.module.css";
import AlbumCard from "../Card/Card";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h3 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse"}
        </h3>
      </div>
      {data.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
                {data.map((card) => (
                <AlbumCard data={card} type={type} key={card.id} />
                ))}
            </div>
          ) : (
            <Carousel data={data} renderCardComponent={(data) => <AlbumCard data={data} type={type}/>}/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;