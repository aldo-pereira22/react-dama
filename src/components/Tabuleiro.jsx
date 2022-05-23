import Celula from './Celula'

import './Tabuleiro.css'

// cor do tabuleiro #735515



function Tabuleiro() {

  // let array = [
  //   ['0', '0','0','0', '0','0','0', '0'],
  //   ['0', '0','0','0', '0','0','0', '0'],
  //   ['0', '0','0','0', '0','0','0', '0'],
  //   ['0', '0','0','0', '0','0','0', '0'],
  //   ['0', '0','0','0', '0','0','0', '0'],
  //   ['0', '0','0','0', '0','0','0', '0'],
  //   ['0', '0','0','0', '0','0','0', '0'],
  //   ['0', '0','0','0', '0','0','0', '0']
  // ]

  let array = [
    'XA','0','XA','0','XA','0','XA','0',
    '0','XA','0','XA','0','XA','0','XA',
    'X','0','X','0','X','0','X','0',
    '0','X','0','X','0','X','0','X',
    'X','0','X','0','X','0','X','0',
    '0','X','0','X','0','X','0','X',
    'XB','0','XB','0','XB','0','XB','0',
    '0','XB','0','XB','0','XB','0','XB'
  ]

    return (
      <div className="tabuleiro">
        <h1> Jogador Alfa</h1>

      
      <div className="campo">      

        { array.map( (item, index) => <div>  { 
        
            //item === '0' ?  <Celula classe="celula-branca" peca="none" />  : <Celula classe="celula-preta"peca="peca" />
          item === '0' ?  <Celula  classe="celula-branca" key={index} index={index} array={array}  />  : <Celula classe="celula-preta" array={array} index={index} key={index} />

        }


        </div>)
        
        }



      </div>


        <h1>Jogador Beta</h1>

      </div>
    );
  }
  
  export default Tabuleiro;