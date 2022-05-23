import './Container.css'

import Tabuleiro from './Tabuleiro'

function container() {
    return (
      <div className="container">

        <Tabuleiro />

        <div className="config">
          <div className="estilo"> 
            <h3>Configurações de estilo</h3>
            <h4>Jogador Alfa</h4>
            <p>
              Cor das peças <input type="color" className="input" />
            </p>


            <h4>Jogador Beta</h4>
            <p>
              Cor das peças <input type="color" className="input" />
            </p>

          </div>



          <div className="reiniciar" >
            
            <h4>Geral</h4>
            <div className="reiniciar-pecas">
              Reiniciar peças
            </div>
          </div>
        </div> 

    

      </div>
    );
  }
  
  export default container
  