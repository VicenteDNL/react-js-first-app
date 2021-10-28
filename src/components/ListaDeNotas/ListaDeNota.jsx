import React, { Component } from "react";
import CardNota from "../CartNota";
import "./estilo.css";

 class ListaDeNotas extends Component{

    render(){
        return(
            <ul className="lista-de-notas">
                {this.props.notas.map((nota, key)=>{
                    return (
                        <li key={key}>
                            <CardNota titulo={nota.titulo} texto={nota.texto}></CardNota>
                        </li>
                    )
                })}
                
            </ul> 
        );
    }
}
export default ListaDeNotas

 