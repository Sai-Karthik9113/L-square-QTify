import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, CircularProgress, Tab, Tabs } from '@mui/material';
import AlbumCard from "../Card/Card";
import Carousel from '../Carousel/Carousel';
import styles from './BasicTab.module.css';

function CustomTabPanel(props) {
  const { value, index, data, filteredData, type, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {
            data.length === 0 ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
              </Box>
            ) : ( 
              <div className={styles.cardsWrapper}>
                <Carousel data={filteredData} renderCardComponent={(album) => <AlbumCard data={album} type={type} />} />
              </div>
            )
          }
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ data, value, handleChange, type, genres }) {
  const [tabValue, setTabValue] = useState(value);
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    handleChange(event, newValue);
  };

  const filteredData = tabValue === 0
    ? data
    : data.filter(album => album.genre.key === genres[tabValue - 1]?.key);

  const tabList = [{key: 'all', label: 'All'}, ...genres];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label='basic tabs' TabIndicatorProps={{
          style: { backgroundColor: 'var(--color-primary)' }
        }} textColor='inherit' className={styles.tab}>
          {
            tabList.map((tab, index) => (
              <Tab sx={{ fontFamily: 'inherit', fontSize: '16px', fontWeight: '600' }} label={tab.label} key={tab.key} {...a11yProps(index)} />
            ))
          }
        </Tabs>
      </Box>
      {tabList.map((_, index) => (
        <CustomTabPanel
          key={index}
          value={tabValue}
          index={index}
          data={data}
          filteredData={filteredData}
          type={type}
        />
      ))}
    </Box>
  );
}
