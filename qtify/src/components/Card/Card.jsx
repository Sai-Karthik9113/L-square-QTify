import React from "react";
import styles from "./Card.module.css"
import { truncate } from "../../helpers/helpers";
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Chip,
    Typography
} from "@mui/material";

const AlbumCard = ({ albumCover }) => {

    return (
        <div className={styles.cardWrapper}>
            <Card className={styles.card} sx={{ borderRadius: '10px' }}>
                <CardActionArea className={styles.CardActionArea}>
                    <CardMedia component="img" height="170" image={albumCover.image} alt={albumCover.slug} />
                    <CardContent className={styles.cardContent}>
                        <Chip
                            sx={{ color: 'var(--color-white)', backgroundColor: 'var(--color-black)', borderRadius: '10px', padding: '4px 8px', fontWeight: '400', fontSize: '10px' }} className={styles.chip} label={`${albumCover.follows} Follows`} />
                    </CardContent>
                </CardActionArea>
            </Card>
            <Typography sx={{ marginTop: '6px', fontSize: '14px' }} className={styles.albumName}>
                {truncate(albumCover.title, 15)}
            </Typography>
        </div>

    );
}

export default AlbumCard;