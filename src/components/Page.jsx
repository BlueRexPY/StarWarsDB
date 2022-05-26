import React, { Component } from 'react'
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ClassConsumer } from './ClassContext';

export class Page extends Component {
  state={
    itemId:1,
    hasError:false
  }
  OnItemSelected=(id)=>{
    this.setState({itemId:id})
  }
  componentDidCatch(){
    this.setState({hasError:true})
  }
    
  render() {
    if(this.state.hasError){
        return(
          <Typography variant="h4" color="error">
          <i class="fa-solid fa-triangle-exclamation"></i> Error
          </Typography>  
        )
    }
    
    return (
      <ClassConsumer>
        {
          (itemClass)=>{
            return(
              <div className='margin'>
                <Box sx={{ flexGrow: 2,display:"flex", justifyContent:"center"}}  >
                  <Grid container
                  width="85%"
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start">
                    <Grid item xs={4}>
                      <ItemList OnItemSelected={this.OnItemSelected} itemClass={itemClass}></ItemList>
                    </Grid>
                    <Grid item xs={4}>
                      <ItemDetails ZeroData={this.ZeroData} itemId={this.state.itemId} itemClass={itemClass}></ItemDetails>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            )
          }
        }
      </ClassConsumer>
    )
  }
}

export default Page