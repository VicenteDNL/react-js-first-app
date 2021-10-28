import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor(){
    super()
    this.categorias = new Categorias()
    this.notas = new ArrayDeNotas()
  }

  render(){
    return (
      <div className="container mt-5">
        <section>

          <div className="my-3">
            <FormularioCadastro 
              categorias={this.categorias}
              adicionarNota={this.notas.adicionarNota.bind(this.notas)}
            ></FormularioCadastro>
          </div>

          <div className="my-3">
            <h4>Categorias:</h4>
            <ListaDeCategorias 
              categorias={this.categorias}
              adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            ></ListaDeCategorias>
          </div>

          <div className="my-3">
            <ListaDeNotas 
              notas={this.notas}
              deletarNota={this.notas.apagarNotas.bind(this.notas)}
            ></ListaDeNotas>
          </div>

        </section>  
      </div>
      
    );
  }
}

export default App;
