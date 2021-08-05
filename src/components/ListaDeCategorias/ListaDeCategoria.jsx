import React, { Component } from "react";
import './estilo.css';

class ListaDeCategoria extends Component {
    _handleEventoInput(e) {

        if (e.key === "Enter") {
            var valorCategoria = e.target.value;
            this.props.addCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section>
                <input
                    type="text"
                    placeholder="Adicionar Categoria..."
                    className="input-categorias"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
                <ul className="list-categorias">
                    {this.props.categorias.map((categoria, index) => {
                        return <li className="list-row-categorias" key={index}>{categoria}</li>;
                    })}

                </ul>

            </section>

        );
    };
}
export default ListaDeCategoria;