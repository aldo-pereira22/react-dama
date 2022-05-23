import './Celula.css'


let pecaSelecionada = []
let divSelecionada = []
let index = []

function Celula({classe, index, array}) {



  function clique(e){

    
    // e.target.classList.remove('peca-1');
    // e.target.classList.add('none');
    let peca = array[index]
    pecaSelecionada.push(peca)
    divSelecionada.push(e.target)
   
    

    // divAnterior.push(e.target)
    // console.log('DIV ANTERIOR',divAnterior[divAnterior.length - 1])  
    // divAnterior[divAnterior.length - 2].classList.remove('peca-1')
    // divAnterior[divAnterior.length - 2].classList.add('none')
  
    if(peca === '0' ) return

    if(divSelecionada[ divSelecionada.length - 2 ]){
      const  divAnterior = divSelecionada[ divSelecionada.length - 2 ]
    
      divAnterior.classList.remove('peca-1')
      divAnterior.classList.add('none')
      array[index] = 'X'


      const  divAtual = divSelecionada[ divSelecionada.length - 1 ]
      divAtual.classList.remove('none')
      divAtual.classList.add('peca-1')
      array[index] = peca


    }


    if( array[pecaSelecionada[pecaSelecionada.length - 1]] === 'X'){
      // array[pecaSelecionada[pecaSelecionada.length - 2]] = 'X'

      console.log(pecaSelecionada)
      if(array[pecaSelecionada[pecaSelecionada.length - 2]] != undefined){
        
        
      }
    }





  }
  function preencher(index) {
      if(
        index === 0 ||
        index === 2 ||
        index === 4 ||
        index === 6 ||
        index === 9 ||
        index === 11 ||
        index === 13  ||
        index === 15   
        ) {
          return <div
           id={index} 
            className="peca-1" 
          > </div>
      }else if(
        index === 63 ||
        index === 61 ||
        index === 59 ||
        index === 57 ||
        index === 54 ||
        index === 52 ||
        index === 50  ||
        index === 48  
      ) {
        return <div id={index}  className="peca-2"  > </div>
      }else {
        return <div
        id={index} 
        className="none" > </div>
      }


  }
    return (
      <div         onClick={(e) => clique(e) }  className={classe}>
        {preencher(index)}   

      </div>


      
    );
  }
  
  export default Celula;