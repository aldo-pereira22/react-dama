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
    '0','X','0','X','0','X','0','X',
    'X','0','X','0','X','0','X','0',
    '0','X','0','X','0','X','0','X',
    'X','0','X','0','X','0','X','0',
    '0','X','0','X','0','X','0','X',
    'X','0','X','0','X','0','X','0',
    '0','X','0','X','0','X','0','X',
    'X','0','X','0','X','0','X','0'
  ]
    return (
      <div className="tabuleiro">
        <h1> Jogador Alfa</h1>

      
      <div className="campo">      

        {/* { array.map( (number) => <li>{ <QuadradoPreto /> }</li>) } */}
        {/* { array.map( (number) => <div>  { <Celula classe="celula-preta"/>  }</div>) } */}
        { array.map( (number, index) => <div>  { 
        
             number === '0' ?  <Celula classe="celula-branca" peca="none" />  : <Celula classe="celula-preta"peca="peca" />
          }
        </div>)
        
        }



      </div>


        <h1>Jogador Beta</h1>

      </div>
    );
  }
  
  export default Tabuleiro;