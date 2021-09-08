import React, { Component } from "react";
import Elecciones from "./components/Eleccion";
import Historial from "./components/Historial";
import data from "./components/data.json";
import "./App.css";

/* const  App = () => (
  <div>
    asda
    <Elecciones/>
    <Historial/>
  </div>
)
export default App;
 */

const controlHistoria = [];
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
    const id = e.target.id;  //obtiene la identificacion del boton en el que se hizo click
    if (this.state.contador >= 7) {
    
    } else if (id === "A" && this.state.seleccionPrevia !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "A",
      });
    }else if (id === "A" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 2,
          seleccionPrevia: "A",
      });
    } else if (id === "B" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 3,
        seleccionPrevia: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "B",
      });
    }
 /*    console.log(controlHistoria); */
  };


  render(){
    return(
  <div className ="contenedor">
        <h1 className ="titulo-principal">ELIGE TU CAMINO</h1>
        <p className ="texto-principal">{data[this.state.contador].id}-{data[this.state.contador].historia}-</p>
      
        
        
        <div className ="contenedor-decisiones">
    <Elecciones
         handleClick = {this.handleClick}
          eleccionA = {data[this.state.contador].opciones.a}
          eleccionB ={ data[this.state.contador].opciones.b}
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