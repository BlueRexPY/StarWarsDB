import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import SwapiService from '../services/SwapiService'
import PropTypes, { func, string } from 'prop-types'

class ItemList extends React.Component {
  static propTypes = {
    OnItemSelected:func,
    itemClass:string
  }

  swapiService = new SwapiService()

  state = {
    List:[],
    loading:true
  }
  
  componentDidMount(){
    this.updateItem()
  }

  componentDidUpdate(prevProps){
    if(this.props.itemClass != prevProps.itemClass){
      this.updateItem()
    }
  }
  updateItem(){
    if (this.props.itemClass == "planets"){
      this.swapiService
      .getAllPlanets()
      .then((List)=>{
        this.setState({
          List,
          loading:false
        });
      });
    }else if (this.props.itemClass == "starships"){
      this.swapiService
      .getAllStarships()
      .then((List)=>{
        this.setState({
          List,
          loading:false
        });
      });
    }else if (this.props.itemClass == "characters"){
      this.swapiService
      .getAllPeople()
      .then((List)=>{
        this.setState({
          List,
          loading:false
        });
      });
    }
  }


  renderItems(arr) {
    return arr.map(({id,name}) =>{
      return(
          <>
            <ListItem button key={id} onClick={ () => this.props.OnItemSelected(id,this.props.itemClass)}>
              <ListItemText primary={name} />
            </ListItem>
            <Divider />
          </>
      )
    })
  }
    
  render(){ 
    if (this.state.loading){
      return (
        <List sx={{width: '100%',
        maxWidth: 360,display:"flex",justifyContent:"center",alignItems:"center",
        bgcolor: 'background.paper',
        color: 'text.primary'
        }} component="nav" >
          <CircularProgress />
        </List>
      )
    }else{
      return (
        <List sx={{width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        color: 'text.primary'
        }} component="nav">
          {this.renderItems(this.state.List)}
        </List>
      );
    }
  }
}

export default ItemList