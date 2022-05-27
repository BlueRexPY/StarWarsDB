import React, { Component } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button';
import { withRouter } from './withRouter';

export class LoginPage extends Component {

  state={
    login:"",
    password:""
  }
  handelOpen=(params)=>{
    this.props.OnAccess(params)
  }

  handleSubmit=()=>{
    if(this.state.login!="" && this.state.password!=""){
      this.props.OnCheckData(this.state.login,this.state.password)
      this.setState({login:"",password:""})
    }else{
      this.setState({login:"",password:""})
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props) {
      if(this.props.login){
        this.props.navigate(`/home`)
      }
    }
  }

  render() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={12}
          direction="column"
          justifyContent="center"
          alignItems="center">
            <Grid item xs={12}>
              <Card sx={{ display: 'flex',width: 330,  height: 320,justifyContent:"space-around",alignItems:"center",flexDirection: 'column',padding:3}}>
                
                <Typography component="div" variant="h4">
                Login
                </Typography>
     
                <TextField id="outlined-basic loginInput" label="Login" variant="outlined" value={this.state.login} onChange={e => this.setState({login:e.target.value})}/>
                <TextField
                  id="outlined-password-input passwordInput"
                  label="Password"
                  type="password"
                  autoComplete="current-password" value={this.state.password} onChange={e => this.setState({password:e.target.value})}/>
                <Button variant="outlined" type="submit" onClick={()=>this.handleSubmit()}>Login</Button>
                <Button variant="text" color="dark" onClick={()=>this.handelOpen(true)} >Open Access</Button>
                
              </Card>
            </Grid>
          </Grid>
        </Box>
    )
  }
}
export default withRouter(LoginPage)