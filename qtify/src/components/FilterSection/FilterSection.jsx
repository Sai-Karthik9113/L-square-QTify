import React, { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import styles from './FilterSection.module.css'
import BasicTabs from '../BasicTabs/BasicTabs';



const FilterSection = ({ 
  title, 
  data, 
  type,
  value,
  handleChange,
  handlToggle
}) => {

    // const songData = () => {
    //     console.log(data);
    // }

    // songData();

    const [filteredData, setFilteredData] = useState([]);
    const [dataReady, setDataReady] = useState(false);

    useEffect(() => {
        if (data && data.length > 0) {
            const newFilteredData = data.filter(album => {
                switch (value) {
                    case 0:
                        return true;
                    case 1:
                        return album.genre.key === 'rock';
                    case 2:
                        return album.genre.key === 'pop';
                    case 3:
                        return album.genre.key === 'jazz';
                    case 4:
                        return album.genre.key === 'blues';
                    default:
                        return false;
                }
            });
            setFilteredData(newFilteredData);
            setDataReady(true) 
        } else {
            setDataReady(false);
        }
    }, [data, value]);


    console.log(data);
    

  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
        </div>
        {
            dataReady ? (
                <BasicTabs
                    data={data}
                    type={type}
                    filteredData={filteredData}
                    value={value}
                    handleChange={handleChange}
                />
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>
            )
        }
    </div>
  )
}

export default FilterSection;