import SearchIcon from '@mui/icons-material/Search';
import { AppBar, InputAdornment, TextField } from '@mui/material';
import PropTypes from 'prop-types';
const Search = ({ onSearchChange }) => {
  return (
    <AppBar position='static' sx={{height:70, alignItems:'center', justifyContent:'center'}}>
      <TextField
        variant='outlined'
        placeholder='Search'
        sx={{
            
          width: 250,
          '& .MuiOutlinedInput-root': {
            color:'text.primary',
            backgroundColor:'#fff',
            fontWeight: 'bold',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2e2e2e',
              borderWidth: '2px',
            },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        onChange={onSearchChange}
      />
    </AppBar>
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func,
};

export default Search;
