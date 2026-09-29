import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Fotos from './pages/fotos/fotos';
import Contato from './pages/contato/contato';
import Comentarios from './pages/comentarios/comentarios';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fotos' element={<Fotos/>} />
        <Route path= '/contato' element={<Contato/>} />
        <Route path= '/comentarios' element={<Comentarios/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
