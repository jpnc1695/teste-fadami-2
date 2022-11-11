import {Routes, Route} from 'react-router-dom';
import PaginaPadrao from './Paginas/PaginaPadrao';
import AdminUsuarios from './Paginas/Usuarios/AdminUsuarios'
import FormularioUsuario from './Paginas/Usuarios/FormularioUsuario';

function App() {
  return (
    <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route path='usuarios' element={<AdminUsuarios/>}/>
          <Route path='usuarios/novo' element={<FormularioUsuario/>}/>
          <Route path='usuarios/:id' element={<FormularioUsuario/>}/>
        </Route>
     </Routes>  
  );
}

export default App;
