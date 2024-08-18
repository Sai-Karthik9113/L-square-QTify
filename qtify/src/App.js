import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import styles from './App.module.css';
import { config } from './helpers/api.jsx';
// import { songs } from './helpers/api.jsx';
import Section from './components/Section/Section.jsx';
import FilterSection from './components/FilterSection/FilterSection';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  // const [genres, setGenres] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch top albums
        const topAlbumsData = await axios.get(`${config.endpoint}/albums/top`);
        setTopAlbums(topAlbumsData.data);

        // Fetch new albums
        const newAlbumsData = await axios.get(`${config.endpoint}/albums/new`);
        setNewAlbums(newAlbumsData.data);

        // Fetch songs
        const songsData = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
        const response = await songsData.data;
        setSongs(response);

      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors or set default values if needed
        setTopAlbums([]);
        setNewAlbums([]);
        setSongs([]);
      }
    };

    fetchData();
  }, []);

  console.log(topAlbums.length, newAlbums.length, songs.length);

  return (
    <>
      <Navbar searchData={newAlbums} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbums} />
        <Section type='album' title='New Albums' data={newAlbums} />
        <FilterSection
          data={songs}
          type='songFilter'
          title='Songs'
          value={value}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </div>
    </>
  );
}

export default App;