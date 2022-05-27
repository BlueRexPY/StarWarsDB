import React,{Component} from 'react';
import './styles/index.css';
import RandomPlanet from './components/RandomPlanet';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Page from './components/Page';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { ClassProvider } from './components/ClassContext';
import Home from './components/Home';

class App extends Component {
  state={
    hasError:false,
    itemClass:"characters" //planets starships characters
  }
  componentDidCatch(){
    this.setState({hasError:true})
  }

  OnClassSelectedTabs=(nameClass)=>{
    this.setState({itemClass:nameClass})
  }

 
  render(){
    if(this.state.hasError){
      return(
        <Typography variant="h4" color="error">
        <i class="fa-solid fa-triangle-exclamation"></i> Error
        </Typography>  
      )
    }
    const theme = createTheme({
      palette: {
        mode: 'dark',
        background: {
          paper: '#0A1929',
        },
        text: {
          primary: '#fff',
          secondary: '#737373',
        },
        primary: {
          main: "#5833A6",
        },
        secondary: {
          main: '#5833A6',
        },
        error: {
          main:'#F28444',
        },
        
      },
    });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
      <ClassProvider value={this.state.itemClass}>
      
      <Header OnClassSelected={this.OnClassSelectedTabs}></Header>
      <div className='margin'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}
          direction="column"
          justifyContent="center"
          alignItems="center">
            <Grid item xs={12}>
              <RandomPlanet></RandomPlanet>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}></Route>

          <Route path="planets/" exact element={<Page nameClass={this.state.itemClass}/>}></Route>
          <Route path="starships/" exact element={<Page nameClass={this.state.itemClass}/>}></Route>
          <Route path="characters/" exact element={<Page nameClass={this.state.itemClass}/>}></Route>

          <Route path=":nameClass/:id" exact element={<Page nameClass={this.state.itemClass} />}></Route>

          <Route path="*" element={<Home/>} />
        </Route>
          
        </Routes>
      
   
      
      </ClassProvider>
      </Router>
      </ThemeProvider>
    </div>
  );
  }
}

export default App;
