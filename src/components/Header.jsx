import React from 'react'
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Header = (props) => {

  const updateDate = (value)=>{
    props.OnClassSelected(value)
  }
  return (
    <Box sx={{ flexGrow: 1 }} textColor="secondary"
    indicatorColor="secondary"
    >
      <AppBar position="static">
        <Stack  display= 'flex' spacing={2} direction="row" justifyContent="center" alignItems="center" >
          <Link className='Tabs' to="characters/1"><Button onClick={ () =>updateDate("characters")}>People</Button></Link>
          <Link className='Tabs' to="planets/1"><Button onClick={ () => updateDate("planets")}>Planets</Button></Link>
          <Link className='Tabs' to="starships/1"><Button onClick={ () => updateDate("starships")}>Starships</Button></Link>
        </Stack>
      </AppBar>
  </Box>
  )
}

export default Header