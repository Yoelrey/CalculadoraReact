import React from "react";
import '../estilos/Boton.css/Clear.css'
const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.manejarClear}>
        Clear
    </div>
);

export default BotonClear;