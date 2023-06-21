import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/static/navbar/Navbar'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Footer from './components/static/footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
          // Antigo Switch
          { <Route path="/" element={<Login />} /> }
          { <Route path="/login" element={<Login />} /> }
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App