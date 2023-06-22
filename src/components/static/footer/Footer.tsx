import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#033b858f", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Redes Sociais: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/dysrrafaa" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/dys_rrafaa/" target="_blank">
                                <InstagramIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/rafael-marques019/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#3b3b3b42", height: "00px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >Desenvolvido por Rafael Marques - 2023 © Copyright<br></br> Todos os Direitos Reservados.</Typography>
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;