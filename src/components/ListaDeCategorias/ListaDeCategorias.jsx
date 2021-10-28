import React, { Component } from 'react';

class ListaDeCategorias extends React.Component {

		constructor(){
			super();
			this.state ={categorias:[]}
			this.ref = this._novasCategorias.bind(this)
		}

		componentDidMount(){
			this.props.categorias.inscrever(this.ref);
		}

		componentWillUnmount(){
			this.props.categorias.desinscrever(this.ref)  
		}

		_novasCategorias(categorias){
			this.setState({...this.state,categorias})
		}

		_handleMudancaTexto(evento){
			evento.stopPropagation();
			this.categoria = evento.target.value
	}

		_handleEventoInput(evento){
			this.props.adicionarCategoria(this.categoria)
		}
		
    render() { 
        return (
					<>
						<ul className="list-group list-group-horizontal">
							{this.state.categorias.map((categotia,index)=>{
								return (
									<li 
										className="list-group-item" 
										key={index}
									>{categotia}</li>
								)
								
							})}
						</ul>
						<div className="input-group my-4">
							<input 
								type="text" 
								className="form-control" 
								placeholder="Categoria"
								aria-describedby="button-addon2"
								onChange={this._handleMudancaTexto.bind(this)}
							></input>
							<button 
								className="btn btn-outline-success" 
								type="button" 
								id="button-addon2"
								onClick={this._handleEventoInput.bind(this)}
							>Adicionar</button>
						</div>
					</>
					
        );
    }
}
 
export default ListaDeCategorias;