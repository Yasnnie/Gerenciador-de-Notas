import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategoria from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[],
      categorias:[]
    }
  }

  criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarCard(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    console.log(arrayNotas);
    this.setState({notas:arrayNotas});
  }

  addCategoria(value){
    const novoCategorias = [...this.state.categorias,value]
    const novoEstado = {...this.state, categorias:novoCategorias}
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categorias = {this.state.categorias}
        criarNota={this.criarNota.bind(this)}
        />

        <main className="conteudo-principal">
        <ListaDeCategoria 
        addCategoria = {this.addCategoria.bind(this)}
        categorias={this.state.categorias}/>

        <ListaDeNotas 
        deleteCard={this.deletarCard.bind(this)} 
        notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
