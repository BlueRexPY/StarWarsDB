import React, { Component } from 'react'
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withRouter } from './withRouter';


export class Page extends Component {
  state={
    itemId:this.props.params.id,
    hasError:false,
    itemClass:this.props.params.nameClass
  }

  updateData(){
    this.setState({itemId:this.props.params.id,itemClass:this.props.params.nameClass})
  }

  OnItemSelected=(id,nameClass)=>{
    this.props.navigate(`/${nameClass}/${id}`)
  }
  
  componentDidCatch(){
    this.setState({hasError:true})
  }

  
  componentDidUpdate(prevProps){
    if (prevProps !== this.props) {
      this.updateData()
    }
  }

  render() {
    if(this.state.hasError){
        return(
          <Typography variant="h4" color="error">
          <i class="fa-solid fa-triangle-exclamation"></i> Error
          </Typography>  
        )
    }else{
    return(
      <div className='margin'>
        <Box sx={{ flexGrow: 2,display:"flex", justifyContent:"center"}}  >
          <Grid container
          width="85%"
          direction="row"
          justifyContent="center"
          alignItems="flex-start">
            <Grid item xs={4}>
              <ItemList OnItemSelected={this.OnItemSelected} itemClass={this.state.itemClass}></ItemList>
            </Grid>
            <Grid item xs={4}>
              <ItemDetails ZeroData={this.ZeroData} itemId={this.state.itemId} itemClass= {this.state.itemClass}></ItemDetails>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
    }
  }
}

export default withRouter(Page)