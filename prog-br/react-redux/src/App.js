import React from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Contador from './componentes/Contador';
import {createStore , combineReducers} from 'redux';
import contadorReducer from './reducers/contadorReducer';
import {Provider} from 'react-redux';


function App() {

  const allReducers= combineReducers({counter: contadorReducer});
  const store = createStore(allReducers);

  return (
    <div className="App">

      <Provider store={store}>

        <Cabecalho></Cabecalho>

        <Contador></Contador>

      </Provider>

    </div>

  );
}

export default App;