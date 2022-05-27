import React, { Component } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default class Home extends Component {
  render() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={12}
          direction="column"
          justifyContent="center"
          alignItems="center">
            <Grid item xs={12}>
                <Card sx={{ display: 'flex',width: 830,  height: 120,justifyContent:"center",alignItems:"center"}}>
                    <Typography component="div" variant="h3">
                    <i class="fa-solid fa-database"></i> Select tab 
                    </Typography>
                </Card>
            </Grid>
          </Grid>
        </Box>
    )
  }
}
