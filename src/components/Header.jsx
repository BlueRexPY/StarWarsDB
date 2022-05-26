import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Header = (props) => {
  const [value, setValue] = React.useState('People');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const updateDate = (value)=>{
    props.OnClassSelected(value)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          centered
        >
          <Tab value="People" label="People" onClick={ () =>updateDate("characters")}/>
          <Tab value="Planets" label="Planets" onClick={ () => updateDate("planets")}/>
          <Tab value="Starships" label="Starships" onClick={ () => updateDate("starships")}/>
        </Tabs>
      </AppBar>
  </Box>
  )
}

export default Header