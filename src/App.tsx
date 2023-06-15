import React from "react"
import './App.css';
import Home from "./pages/home";
import { Grid } from '@material-ui/core'

  function App() {

    return (
      <div >
        <Grid >
          <Grid >
            <Home />
          </Grid>
        </Grid>
      </div>
    )
  }

export default App