import React, { Component } from "react";
import CardNota from "../CartNota";
import "./estilo.css";

 class ListaDeNotas extends Component{

    constructor(){
        super();
        this.state ={notas:[]}
        this.ref = this._novasNotas.bind(this)
    }

    componentDidMount(novasNotas){
        this.props.notas.inscrever(this.ref)
    }

    componentWillUnmount(){
        this.props.notas.desinscrever(this.ref)  
    }
    _novasNotas(notas){
        this.setState({...this.state,notas})
    }

    render(){
        return(
            <ul className="lista-de-notas">
                {this.state.notas.map((nota, key)=>{
                    return (
                        <li key={key}>
                            <CardNota 
                                indece={key}
                                deletarNota={this.props.deletarNota}
                                titulo={nota.titulo} 
                                texto={nota.texto}
                                categoria={nota.categoria}
                            ></CardNota>
                        </li>
                    )
                })}
                
            </ul> 
        );
    }
}
export default ListaDeNotas

 