import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSvg} from '../../assets/img/delete.svg';

class CardNota extends Component {
  apagar(){
    const index = this.props.indice;
    this.props.deleteCard(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">Título: {this.props.titulo}</h3>
          
          <DeleteSvg className="delete-svg" onClick={this.apagar.bind(this)}/>
        </header>
        <h4 className="categoria-title">Categoria: {this.props.categorias}</h4>
        <p className="card-nota_texto">Descrição: {this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
