import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import styles from './App.module.css';
// import { fetchAllData} from './helpers/api.jsx';
// import { songs } from './helpers/api.jsx';
import Section from './components/Section/Section.jsx';
import FilterSection from './components/FilterSection/FilterSection';

function App() {
  const [albumsData, setAlbumsData] = useState({
    topAlbums: [],
    newAlbums: [],
    songs: [],
  });
  const [genres, setGenres] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(songs.length);
  

  // const fetchData = async () => {
  //   try {
  //     const { topAlbums, newAlbums, songs } = await fetchAllData();
  //     setAlbumData({ topAlbums, newAlbums, songs });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(albumData.songs.length);
  

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(albumData.songs, albumData.newAlbums, albumData.topAlbums);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch genres
        const genreResponse = await axios.get('https://qtify-backend-labs.crio.do/genres');
        setGenres([...genreResponse.data?.data || []]);

        // Fetch albums and songs
        const topAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        const newAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
        const songsResponse = await axios.get('https://qtify-backend-labs.crio.do/songs');

        // Set albums data
        setAlbumsData({
          topAlbums: topAlbumsResponse.data,
          newAlbums: newAlbumsResponse.data,
          songs: songsResponse.data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setAlbumsData({
          topAlbums: null,
          newAlbums: null,
          songs: null,
        });
        setGenres([]);
      }
    };

    fetchData();
  }, []);
  

  return (
    <>
      <Navbar searchData={albumsData.newAlbums} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={albumsData.topAlbums} />
        <Section type='album' title='New Albums' data={albumsData.newAlbums} />
        <FilterSection
          data={albumsData.songs}
          type='songFilter'
          title='Songs'
          value={value}
          handleChange={handleChange}
          handleToggle={handleToggle}
          genres={genres}
        />
      </div>
    </>
  );
}

export default App;