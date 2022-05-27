import React from 'react'
import { Link } from "react-router-dom";
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
          centered
        >
          <Link className='Tabs' to="characters/1"><Tab value="People" label="People" onClick={ () =>updateDate("characters")}/></Link>
          <Link className='Tabs' to="planets/1"><Tab value="Planets" label="Planets" onClick={ () => updateDate("planets")}/></Link>
          <Link className='Tabs' to="starships/1">
          <Tab value="Starships" label="Starships" onClick={ () => updateDate("starships")}/></Link>
        </Tabs>
      </AppBar>
  </Box>
  )
}

export default Header