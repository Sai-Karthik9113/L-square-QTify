import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Section from './components/Section/Section.jsx';
import FilterSection from './components/FilterSection/FilterSection';
import styles from './App.module.css';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreResponse = await axios.get('https://qtify-backend-labs.crio.do/genres');
        setGenres(genreResponse.data?.data || []);

        const topAlbumsData = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setTopAlbums(topAlbumsData.data);

        // Fetch new albums
        const newAlbumsData = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
        setNewAlbums(newAlbumsData.data);

        // Fetch songs
        const songsData = await axios.get('https://qtify-backend-labs.crio.do/songs');
        setSongs(songsData.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(songs);
  

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
          genres={genres}
        />
      </div>
    </>
  );
}

export default App;
