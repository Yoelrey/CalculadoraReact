import React from "react";
import "../estilos/Boton.css/Boton.css";


function Boton(props){

const esOperador = valor => {

    return isNaN(valor) && (valor !== ".") && (valor !== "=");

};

return(

    <div className={`boton_contenedor
     ${esOperador(props.children) ? "operador" : null}`.trim()}
     onClick={()=>props.manejarClic(props.children)}>
        {props.children}
    </div>

);
}

export default Boton;