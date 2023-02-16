import './App.css';

import Aula from './components/Aula';
import Aulas from './components/Aulas';
import Home from './components/Home';
import Nav from './components/Nav';
import Sobre from './components/Sobre';
import Assistir from './components/Assistir';
import PageNotFound from './components/PageNotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aulas/:id' element={<Aula />} />
          <Route path='/aulas' element={<Aulas />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/assistir' element={<Assistir />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
