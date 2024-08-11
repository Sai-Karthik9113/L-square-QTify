import React, { useEffect, useState } from "react";
import {
    Button,
    Typography
} from '@mui/material';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import Section from "../AlbumSection/AlbumSection";
import styles from './Section.module.css';

const AlbumSection = () => {
    const { enqueueSnackbar } = useSnackbar ();
    const [visibleTopAlbumCards, setVisibleTopAlbumCards] = useState(6);
    const [visibleNewAlbumCards, setVisibleNewAlbumCards] = useState(6);
    const [albums, setAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [showMoreNew, setShowMoreNew] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        const fetchAlbums = async () => {
            setLoading(true);
            try {
                const [topResponse, newResponse] = await Promise.all([
                    axios.get('https://qtify-backend-labs.crio.do/albums/top'),
                    axios.get('https://qtify-backend-labs.crio.do/albums/new')
                ]);
                setAlbums(topResponse.data);
                setNewAlbums(newResponse.data);
                setLoading(false);
            } catch (error) {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            }
        }
        fetchAlbums();
    }, [enqueueSnackbar]);

    const handleTopAlbumsToggle = () => {
        if (showMore) {
            setVisibleTopAlbumCards(6);
        } else {
            setVisibleTopAlbumCards(albums.length);
        }
        setShowMore(!showMore);
    }

    const handleNewAlbumsToggle = () => {
        if (showMoreNew) {
            setVisibleNewAlbumCards(6);
        } else {
            setVisibleNewAlbumCards(albums.length);
        }
        setShowMoreNew(!showMoreNew);
    }

    return (
        <>
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionHeaderWrapper}>
                    <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                        Top Albums
                    </Typography>
                    <Button
                        sx={{
                            border: 'none',
                            background: 'none',
                            fontWeight: '600',
                            fontSize: '20px',
                            color: 'var(--color-primary)',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                boxShadow: 'none'
                            }
                        }}
                        onClick={handleTopAlbumsToggle}
                    >
                        {showMore ? 'Collapse' : 'Show All'}
                    </Button>
                </div>
                <Section albums={albums} visibleCards={visibleTopAlbumCards} loading={loading} />
            </div>
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionHeaderWrapper}>
                    <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                        New Albums
                    </Typography>
                    <Button
                        sx={{
                            border: 'none',
                            background: 'none',
                            fontWeight: '600',
                            fontSize: '20px',
                            color: 'var(--color-primary)',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                boxShadow: 'none'
                            }
                        }}
                        onClick={handleNewAlbumsToggle}
                    >
                        {showMoreNew ? 'Collapse' : 'Show All'}
                    </Button>
                </div>
                <Section albums={newAlbums} visibleCards={visibleNewAlbumCards} loading={loading} />
            </div>  
        </>
    );
};

export default AlbumSection;