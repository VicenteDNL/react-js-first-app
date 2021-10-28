import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import './assets/index.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo,texto){
    const novaNota = {titulo,texto}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado ={
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
}

  render(){
    return (
      <div className="container mt-5">
        <section>
          <FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro>
          <ListaDeNotas notas={this.state.notas}></ListaDeNotas>
        </section>  
      </div>
      
    );
  }
}

export default App;
