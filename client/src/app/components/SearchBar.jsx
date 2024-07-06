import { Search} from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'

export const SearchBar = ({ setSearchQuery, placeholder }) => {
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <FormControl size='small' fullWidth sx={{ backgroundColor: 'transparent', borderRadius: 5 }}>
            
            <OutlinedInput
                type="text"
                onChange={handleSearchChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            edge="end"
                            sx={{ color: 'App.gris' }}
                        >
                           <Search sx={{fontSize: '20px'}}/>

                        </IconButton>
                    </InputAdornment>
                }
                placeholder={placeholder}
                sx={{
                    color: 'App.text',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'App.gris', // change border color on hover
                    },
                    '&:focus-within .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'App.gris', // change border color to transparent when focused
                    },
                    '&:not(:focus):not(:focus-within) .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'App.gris', // change border color to white when not focused
                    },
                    '& input::placeholder': { 
                        fontSize: '15px', 
                        color: 'App.gris', 
                    },
                    borderRadius: 5,
                }}
            />
        </FormControl>
    )
}