import React, { Component } from "react";
import Elecciones from "./components/Eleccion";
import Historial from "./components/Historial";
import data from "./components/data.json";
import "./App.css";

const controlHistoria = [];

const totalDatos = data.length;
console.log(totalDatos);
export default class App extends Component {  
  state = {
    contador : 0,
    seleccionPrevia : ""  
  } ;

  componentDidUpdate(prevState) {
    if (prevState.contador !== this.state.contador) {
      controlHistoria.push(this.state.seleccionPrevia);
    }
  }
  handleClick = (e) => {
    const id = e.target.id;  //obtiene la identificacion (id) del boton en el que se hizo click 

    switch (id) {
      case "A":
        if (this.state.seleccionPrevia !== "A") {
          this.setState({
            contador: this.state.contador + 1,
            seleccionPrevia: "A"
          });
        } else {
          this.setState({
            contador: this.state.contador + 2,
            seleccionPrevia: "A"
          });
        }
        break;
        case "B":
          this.setState({
            contador: this.state.contador + 2,
            seleccionPrevia: "B"
          });
          if (this.state.seleccionPrevia === "A") {
            this.setState({
              contador: this.state.contador + 3,
              seleccionPrevia: "B"
            });
          }
          break;
          default:
          }
        }
        
        
        render(){
       const stop = this.state.contador >=7;
       const bloquearBoton = stop ?  true :  false; 
        
    return(
  <div className ="contenedor">
        <h1 className ="titulo-principal">ELIGE TU CAMINO</h1>
        <p className ="texto-principal">{data[this.state.contador].id}-{data[this.state.contador].historia}-</p>
  <div className ="contenedor-decisiones">
    <Elecciones
         handleClick = {this.handleClick}
          eleccionA = {data[this.state.contador].opciones.a}
          eleccionB ={ data[this.state.contador].opciones.b}
          desamble = {bloquearBoton}
    />
    <Historial
         seleccionPrevia = {this.state.seleccionPrevia}
          historial = {controlHistoria.map(
            (e, index) => (
              <li key = {index}>{e}</li>
            ),
            data[this.state.contador].id
          )}
    />
    </div>
  </div>
    );
  }

}