import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function HeartFavorite() {

  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 50, position: 'absolute', top: 0, right: 0}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        sx={{ backgroundColor: 'transparent'}}
      >
        <BottomNavigationAction icon={<FavoriteBorderIcon/>} />
      </BottomNavigation>
    </Box>
  );
}

export default HeartFavorite;