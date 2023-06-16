import React from "react";
import './login.css'
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Login() {

    return(
        
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid xs={6} alignItems="center">
                <Box paddingX={20}>
                    <form>
                        |<Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight:'bold'}}>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'> 
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>

            <Grid xs={6}>

            </Grid>
        </Grid>
    );

}

export default Login;