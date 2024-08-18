import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import styles from './FilterSection.module.css';
import BasicTabs from '../BasicTabs/BasicTabs';

const FilterSection = ({ 
  title, 
  data, 
  type,
  value,
  handleChange,
  genres
}) => {
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
        </div>
        {
            data && data.length > 0 ? (
                <BasicTabs
                    data={data}
                    type={type}
                    value={value}
                    handleChange={handleChange}
                    genres={genres}
                />
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>
            )
        }
    </div>
  );
}

export default FilterSection;
