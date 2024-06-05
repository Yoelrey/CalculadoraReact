import './App.css';
import  sonic from './imagenes/sonic.png'
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';



function App() {


  const [input, setInput] = useState('');


  const añadirInput = valor => {
    setInput(input + valor);
  };
  const calcularResultado = () => {
if(input){
  setInput(evaluate(input));
}else{
  alert("Por favor ingrese valores para realizar los calculos")
}
  };
  

  return (
    <div className="App">
      <div className='logo_contenedor'>
       <img src={sonic}
        className='logo'
        alt='Logo de la aplicacion'/>
      </div>
        
        
        <div className='contenedor_calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClic={añadirInput}>1</Boton>
            <Boton manejarClic={añadirInput}>2</Boton>
            <Boton manejarClic={añadirInput}>3</Boton>
            <Boton manejarClic={añadirInput}>+</Boton>
               </div>
          <div className='fila'> 
            <Boton manejarClic={añadirInput}>4</Boton>
            <Boton manejarClic={añadirInput}>5</Boton>
            <Boton manejarClic={añadirInput}>6</Boton>
            <Boton manejarClic={añadirInput}>-</Boton></div>
          <div className='fila'>
            <Boton manejarClic={añadirInput}>7</Boton>
            <Boton manejarClic={añadirInput}>8</Boton>
            <Boton manejarClic={añadirInput}>9</Boton>
            <Boton manejarClic={añadirInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={añadirInput}>0</Boton>
            <Boton manejarClic={añadirInput}>.</Boton>
            <Boton manejarClic={añadirInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={()=> setInput('')}/>
          </div>
        </div>
     
   
   

    </div>
  );
}

export default App;
