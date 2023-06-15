import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import './Home.css'

function Home() {
     return (
          <>
               <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                         <Paper style={{height: "100vh", background: "lightgrey"}}/>
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                         <Grid item>
                              <Paper style={{height: "50vh", background: "grey"}}/>
                         </Grid>
                         <Grid item>
                              <Paper style={{height: "50vh", background: "grey"}}/>
                         </Grid>
                    </Grid>
               </Grid>

          </>
     )
}

export default Home;