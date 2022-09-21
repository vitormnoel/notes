import React, { Component } from 'react';
import  ListaDeNotas  from "./components/list";
import FormularioCadastro from "./components/form";
import './reset.css'
import './index.css'

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render(){
    return (
      <section className="formulario">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;