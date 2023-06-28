import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import React from 'react';
import { Link, useNavigate} from 'react-router-dom'
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        alert("Usuário deslogado")
       navigate('/login')
    }

    let navbarComponent;

    if(token != ""){

        navbarComponent =  
         <AppBar position="static">
        <Toolbar variant="dense">
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    BLOG | RM
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                       Temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Cadastro Tema
                    </Typography>
                </Box>
                </Link>
              
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Sair
                        </Typography>
                    </Box>
                
            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
          {navbarComponent}
        </>
    )
}


export default Navbar;