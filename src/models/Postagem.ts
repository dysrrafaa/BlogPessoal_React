import Tema from './Temas'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema | null
    
}

export default Postagem;