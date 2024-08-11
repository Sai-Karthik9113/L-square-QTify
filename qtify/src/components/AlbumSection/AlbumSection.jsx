import React from "react";
import { CircularProgress, Grid, Box, Typography } from "@mui/material";
import AlbumCard from "../Card/Card";
import styles from './AlbumSection.module.css';

const Section = ({ albums, visibleCards, loading }) => {

    return (
        <>
        {
            loading ? (
                <Box className={styles.loading}>
                    <CircularProgress />
                    <Typography variant="h6">Getting your top albums ready, stay tuned...</Typography>
                </Box>
            ) : (
                <Grid container spacing={6}>
                {
                    albums.slice(0, visibleCards).map ((album) => (
                        <Grid item xs={12} sm={6} md={3} lg={2} key={album.id}>
                            <AlbumCard albumCover={album} />
                        </Grid>
                    ))
                }
                </Grid>
            )
        }
        </>
    );
}

export default Section;