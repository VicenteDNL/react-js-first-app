import { Component } from "react";

class FormularioCadastro extends Component{

    constructor(pros){
        super(pros)
        this.titulo="";
        this.texto="";
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo =evento.target.value
    }
    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto =evento.target.value
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo,this.texto)
    }

    render(){
        return(
            <form  onSubmit={this._criarNota.bind(this)}>
                <div className="mb-3">
                    <label 
                        for="exampleFormControlInput1" 
                        className="form-label"
                    >Título da Nota</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="titulo" 
                        onChange={this._handleMudancaTitulo.bind(this)}
                    ></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Descrição da Nota</label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1"  
                        placeholder="Escreva sua nota" 
                        rows="3"
                        onChange={this._handleMudancaTexto.bind(this)}
                        ></textarea>
                </div>
                <div className="mb-3 d-flex flex-row-reverse">
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
                
            </form>
    
          
        );

    }
}
export default FormularioCadastro