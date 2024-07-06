import React, { useState } from 'react'
import { SearchBar } from './SearchBar';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchIcon = ({setSearchQuery, placeholder}) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleSearchButtonClick = () => {
      setIsSearchVisible(true);
    };
  
    const handleSearchClose = () => {
      setIsSearchVisible(false);
    };
  
    return (
      <div>
        {!isSearchVisible && (
          <IconButton onClick={handleSearchButtonClick}>
            <Search sx={{fontSize: '20px'}}/>
          </IconButton>
        )}
        {isSearchVisible && (
          <SearchBar setSearchQuery={setSearchQuery} placeholder={placeholder}/>
        )}
      </div>
    )
}