import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import stilo from "./Historial.module.css";

class Historial extends Component{
  render () {
    return(
      <div >
        <h3>Ultima Eleccion: {this.props.seleccionPrevia}</h3>
        <h4>Anteriores : </h4>
        <ul className ={stilo.listado}>
            {this.props.historial}
       </ul>
      </div>
    );
  }
} 

export default Historial;
