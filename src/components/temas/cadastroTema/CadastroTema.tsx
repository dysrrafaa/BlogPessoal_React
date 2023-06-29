import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Temas';
import { buscaId, post, put } from '../../../services/Service';

function CadastroTema() {
    const navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {

            alert("Você precisa estar logado")
            
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
    
            if (id !== undefined) {
                put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema Atualizado com Sucesso');
            } else {
                post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                alert('Tema Cadastrado com Sucesso');
            }
            back()
    
        }
    
        function back() {
            navigate('/temas')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de Cadastro Tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="Titulo" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;