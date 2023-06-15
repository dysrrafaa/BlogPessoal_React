import React from "react";
import './home.css';
import { Button, Paper } from '@material-ui/core';
import { Box } from "@mui/material";

function Home() {
  return (
    <div className="container">
      <Paper className="paper">
        <h1 >Home</h1>
        <Box >
          <Button >
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default Home;