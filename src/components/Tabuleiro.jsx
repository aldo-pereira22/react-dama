import Quadrado from './Quadrado'
import './Tabuleiro.css'

// cor do tabuleiro #735515



function Tabuleiro() {
    return (
      <div className="tabuleiro">
        <h1> Jogador Alfa</h1>

        <div className="campo">
          <Quadrado />
          <Quadrado />

        </div>

        <h1>Jogador Beta</h1>

      </div>
    );
  }
  
  export default Tabuleiro;