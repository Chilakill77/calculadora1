import './App.css';
import logo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { initializeApp } from "firebase/app";

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={logo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
    
  );
  const firebaseConfig = {
    apiKey: "AIzaSyAznyYhwQnWK2CdNel0V3u47yiEdcwgC-o",
    authDomain: "calculadora-69af6.firebaseapp.com",
    projectId: "calculadora-69af6",
    storageBucket: "calculadora-69af6.appspot.com",
    messagingSenderId: "333169612360",
    appId: "1:333169612360:web:7dd37da0128153af9eea7d"
  };
}
const app = initializeApp(firebaseConfig);
export default App;
