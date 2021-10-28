import React, { Component } from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"
import {ReactComponent as MarkVG} from "../../assets/img/bookmark.svg"
class CardNota extends Component {

    apagar(){
        const indice = this.props.indece
        this.props.deletarNota(indice)
    }

    render() { 
        return (
                <div className="card">
                    <div className="card-body card-nota">
                        <h5 className="card-title">
                            {this.props.titulo}
                        </h5>
                        <p className="card-text">
                            {this.props.texto}
                        </p>
                    </div>
                    <div class="card-footer text-muted d-flex justify-content-between">
                        <button 
                            type="button" 
                            className="btn btn-sm btn-danger"
                            onClick={this.apagar.bind(this)}
                        >
                            <DeleteSVG/>
                            Deletar
                        </button>
                        <div>
                            <MarkVG></MarkVG>{this.props.categoria}
                            </div>
                        
                    </div>
                </div>
            );
    }
}
 
export default CardNota;