import React from 'react'
import styles from "./Card.module.css"
import { truncate } from '../../helpers/helpers';
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Chip,
    Tooltip
} from "@mui/material";

const AlbumCard = ({data,type}) => {

  const getCard = (type) => {

    switch(type) {

      case "album" : {
        const {image,follows,title,songs} = data;

        return (

          <Tooltip title={`${songs?.length} songs`} placement='top' arrow>
          <div className={styles.wrapper}>
            <Card sx={{ borderRadius: '10px' }} className={styles.card}>
                <CardActionArea>
                    <CardMedia component="img" height="170" image={image} alt='album' />
                    <CardContent className={styles.cardContent}>
                        <Chip
                        sx={{
                                padding: '4px 8px',
                                fontFamily: 'Poppins, Arial, sans-serif',
                                fontWeight: '400',
                                fontSize: '10px',
                                '& .MuiChip-label':{
                                    padding: 0
                                }
                        }} 
                        label={`${follows} Follows`} className={styles.chip} size="small"/>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div className={styles.titleWrapper}>
              <p>{truncate(title, 30)}</p>
            </div>
          </div>
          </Tooltip>
        )
      }
      case "song" : {
        
        const {image,likes,title,songs} = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement='top' arrow>
          <div className={styles.wrapper}>
          <Card sx={{ borderRadius: '10px' }} className={styles.card}>
                <CardActionArea>
                    <CardMedia component="img" height="170" image={image} alt='album' />
                    <CardContent className={styles.cardContent}>
                        <Chip
                        sx={{
                                padding: '4px 8px',
                                fontFamily: 'Poppins, Arial, sans-serif',
                                fontWeight: '400',
                                fontSize: '10px',
                                '& .MuiChip-label':{
                                    padding: 0
                                }
                        }} 
                        label={`${likes} Likes`} className={styles.chip} size="small"/>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div className={styles.titleWrapper}>
              <p>{truncate(title, 30)}</p>
            </div>
          </div>
          </Tooltip>
        )
      }
      case 'songFilter' : {
        const {image,likes,title} = data;
        return (
        <div className={styles.wrapper}>
          <Card sx={{ borderRadius: '10px' }} className={styles.card}>
                <CardActionArea>
                    <CardMedia component="img" height="170" image={image} alt='album' />
                    <CardContent className={styles.cardContent}>
                        <Chip
                        sx={{
                                padding: '4px 8px',
                                fontFamily: 'Poppins, Arial, sans-serif',
                                fontWeight: '400',
                                fontSize: '10px',
                                '& .MuiChip-label':{
                                    padding: 0
                                }
                        }} 
                        label={`${likes} Likes`} className={styles.chip} size="small"/>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div className={styles.titleWrapper}>
              <p>{truncate(title, 30)}</p>
            </div>
          </div>
                    
        )
      }
      default:
        return <></>
    } 
  }
  return getCard(type)
}

export default AlbumCard;