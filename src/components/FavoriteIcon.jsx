import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';

function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 50, position: 'absolute', top: 0, right: 0}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: 'transparent' }}
      >
        <BottomNavigationAction icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default SimpleBottomNavigation;