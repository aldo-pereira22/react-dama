import './Container.css'

import Tabuleiro from './Tabuleiro'

function container() {
    return (
      <div className="container">

        <Tabuleiro />

        <div className="config">
          <div className="estilo"> Estilos</div>
          <div className="reiniciar" > Reiniciar</div>
        </div> 

    

      </div>
    );
  }
  
  export default container
  