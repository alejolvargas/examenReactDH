import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import stilo from "./Eleccion.module.css";


class Elecciones extends Component{
  render() {
    return(
        <div>
            <div className ={stilo.eleccionA}>
              <button id ="A" className = {stilo.boton} onClick={this.props.handleClick}>A</button>
              <p> {this.props.eleccionA}</p>
            </div>
            <div className ={stilo.eleccionB}>
              <button id ="B" className = {stilo.boton} onClick={this.props.handleClick} >B</button>
              <p> {this.props.eleccionB}</p>
            </div>
        </div>
    );
  }
}

export default Elecciones;