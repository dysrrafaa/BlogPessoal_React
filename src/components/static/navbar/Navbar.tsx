import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css'
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    const navigate = useNavigate();

    function goLogout() {
        setToken('')

        alert("Usuário deslogado")

        navigate('/login')
    }
    return (
        <>
            <AppBar position="static" className="appbar">
                <Toolbar variant="dense" className="toolbar">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            Blog | RM
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className="nav-link">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className="nav-link">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className="nav-link">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className="nav-link">
                                    Cadastro Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit" className="logout">
                                Sair
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;