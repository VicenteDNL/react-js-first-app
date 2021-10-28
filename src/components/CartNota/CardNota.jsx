import React, { Component } from 'react';
import "./estilo.css";
class CardNota extends Component {
    render() { 
        return (
                <div className="card">
                    <div className="card-body card-nota">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <p className="card-text">
                            {this.props.texto}
                        </p>
                    </div>
                </div>
            );
    }
}
 
export default CardNota;