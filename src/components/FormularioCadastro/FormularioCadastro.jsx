import { Component } from "react";

class FormularioCadastro extends Component{

    constructor(pros){
        super(pros)
        this.titulo="";
        this.texto="";
        this.categoria = "Sem Categoria";
        this.state = {categorias:[]}
        this.ref = this._novasCategorias.bind(this)
    }
    componentDidMount(){
        this.props.categorias.inscrever(this.ref)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this.ref)  
    }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias})
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
        this.props.adicionarNota(this.titulo,this.texto, this.categoria)
    }

    _handleMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria =evento.target.value

    }

    render(){
        return(
            <form  onSubmit={this._criarNota.bind(this)}>
                <div className="mb-3">
                    <label 
                        htmlFor="exampleFormControlSelect1" 
                        className="form-label"
                    >Categorias</label>
                    <select 
                        onChange={this._handleMudancaCategoria.bind(this)}
                        className="form-select" 
                        id="exampleFormControlSelect1" 
                    >
                        {this.state.categorias.map((categoria,index)=>{
                            return (<option key={index}>{categoria}</option>)
                        })}
                        <option>Sem Categoria</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="exampleFormControlInput1" 
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
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição da Nota</label>
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