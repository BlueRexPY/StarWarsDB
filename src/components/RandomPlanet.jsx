import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SwapiService from '../services/SwapiService'
import CircularProgress from '@mui/material/CircularProgress';

class RandomPlanet extends React.Component{

  SwapiService = new SwapiService()

  constructor(){
    super()
    this.state={
      planet:{},
      loading: true,
      error: false
    }
  }

  componentDidMount(){
    this.updateData()
    this.interval = setInterval(this.updateData,5000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => { 
    this.setState({planet,loading:false})
  };

  onError = (err) =>{
    this.setState({error:true,loading:false})
  }

  updateData=()=>{
    const id = Math.floor(Math.random() * 10)
    this.SwapiService
    .getPlanet(id+2)
    .then(this.onPlanetLoaded)
    .catch(this.onError)
  }

  render(){
    const {planet:{id,name,population,rotationPeriod,diameter}, loading,error} = this.state

    if(loading){
      return (
      <Card sx={{ display: 'flex',width: 830,  height: 200,justifyContent:"center",alignItems:"center"}}>
        <CircularProgress />
      </Card>
      )
    }else if(error){
      return (
      <Card sx={{ display: 'flex',width: 830,  height: 200,justifyContent:"center",alignItems:"center"}}>
        <Typography variant="h4" color="error">
        <i class="fa-solid fa-triangle-exclamation"></i> Planet not found
        </Typography>   
      </Card>
      )
    }else{
      return (
        <Card sx={{ display: 'flex',width: 830, flexDirection: 'row',justifyContent:"space-between" }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }} >
              <Typography component="div" variant="h3">
                {name}
              </Typography>
              <Stack direction="column" >
                <Typography variant="body1" color="text.secondary" component="div">
                  {`Population:	${population}`}
                </Typography>
                <Typography variant="body1" color="text.secondary" component="div">
                  {`Rotation Period: ${rotationPeriod}`}
                </Typography>
                <Typography variant="body1" color="text.secondary" component="div">
                  {`Diameter: ${diameter}`}
                </Typography>
              </Stack>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ height: 200, width: 200 }}
            image={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`}
            alt="Planet"
          />
        </Card>
      )
    }
  }
}

export default RandomPlanet