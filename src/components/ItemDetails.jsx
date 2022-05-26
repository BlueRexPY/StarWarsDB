import React,{Component} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SwapiService from '../services/SwapiService'
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes, { string } from 'prop-types'

class itemDetails extends Component {

  static propTypes = {
    itemClass:string
  }

  SwapiService = new SwapiService()

  state={
    item:{},
    loading:false 
  }

  componentDidMount(){
    this.updateItem()
  }
  componentDidUpdate(prevProps){
    if(this.props.itemId != prevProps.itemId){
      this.updateItem()
    }
  }
  updateItem(){
    const itemId = this.props.itemId
    this.setState({loading:true})
    if (this.props.itemClass == "characters"){
      this.SwapiService
      .getPerson(itemId)
      .then((item)=>{
        this.setState({item,loading:false})
    })
    }else if (this.props.itemClass == "starships"){
      this.SwapiService
      .getStarship(itemId)
      .then((item)=>{
        this.setState({item,loading:false})
    })
    }if (this.props.itemClass == "planets"){
      this.SwapiService
      .getPlanet(itemId)
      .then((item)=>{
        this.setState({item,loading:false})
    })
    }

  }

  render(){

    const detalis = () =>{
      if (this.props.itemClass == "characters"){
        return(
          <Stack direction="column" >
           <Typography variant="body1" color="text.secondary" component="div">
               {`Gender:	${this.state.item.gender}`}
           </Typography>
           <Typography variant="body1" color="text.secondary" component="div">
               {`Birth Year:	${this.state.item.birthYear}`}
           </Typography>
           <Typography variant="body1" color="text.secondary" component="div">
               {`Eye Color:	${this.state.item.eyeColor}`}
           </Typography>
          </Stack>
        )
      }else if (this.props.itemClass == "starships"){
        return(
          <Stack direction="column" >
           <Typography variant="body1" color="text.secondary" component="div">
               {`Model:	${this.state.item.model}`}
           </Typography>
           <Typography variant="body1" color="text.secondary" component="div">
               {`Length:	${this.state.item.length}`}
           </Typography>
           <Typography variant="body1" color="text.secondary" component="div">
               {`Cost:	${this.state.item.costIncredits}`}
           </Typography>
          </Stack>
        )
      }else if (this.props.itemClass == "planets"){
        return(
          <Stack direction="column" >
           <Typography variant="body1" color="text.secondary" component="div">
               {`Population:	${this.state.item.population}`}
           </Typography>
           <Typography variant="body1" color="text.secondary" component="div">
               {`Rotation Period: ${this.state.item.rotationPeriod}`}
           </Typography>
           <Typography variant="body1" color="text.secondary" component="div">
               {`Diameter: ${this.state.item.diameter}`}
           </Typography>
          </Stack>
        )
      }
    }


    if (this.state.loading){
      return (
        <Card sx={{ display: 'flex',maxWidth: 800,justifyContent:"center",alignItems:"center", padding:"120px" }}>
          <CircularProgress />
        </Card>
      )
    }else{
      return (
        <Card sx={{ display: 'flex',maxWidth: 800,justifyContent:"space-between" }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }} >
              <Typography component="div" variant="h3">
                {this.state.item.name}
              </Typography>
              {detalis()}
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200, height:290 }}
            image={`https://starwars-visualguide.com//assets/img/${this.props.itemClass}/${this.state.item.id}.jpg`}
            alt="item"
          />
        </Card>
      )}
  } 
}

export default itemDetails