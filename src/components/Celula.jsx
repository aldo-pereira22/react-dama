import './Celula.css'


let pecaSelecionada = []
let divSelecionada = []
let indexSelecionado = []

function Celula({classe, index, array}) {



  function clique(e){

    
    // e.target.classList.remove('peca-1');
    // e.target.classList.add('none');
    let peca = array[index]
  
 
   
    

    // divAnterior.push(e.target)
    // console.log('DIV ANTERIOR',divAnterior[divAnterior.length - 1])  
    // divAnterior[divAnterior.length - 2].classList.remove('peca-1')
    // divAnterior[divAnterior.length - 2].classList.add('none')
  
    if(peca === '0' ){
      console.log("Vc clicou em uma peça: ", peca, " Movimento é inválido")
      return
    } 
      
    if(peca === 'XA' || peca == 'XB'){
      console.log("Vc clicou em uma peca:",peca, " index:", index)
      pecaSelecionada.push(peca)
      divSelecionada.push(e.target)
      indexSelecionado.push(index)
      console.log(e.target)

    }

    if(peca === 'X'){
      console.log("Vc clicou em uma peca:",peca)
      pecaSelecionada.push(peca)
      divSelecionada.push(e.target)
      indexSelecionado.push(index)
      console.log(e.target)
    }



    if(pecaSelecionada[pecaSelecionada.length - 2]){
      console.log("TEM PEÇA SELECIONADA: -2", pecaSelecionada[pecaSelecionada.length -2],'INDEX')

      if( (pecaSelecionada[pecaSelecionada.length -2] === 'XA' )
      
      && pecaSelecionada[pecaSelecionada.length -1] === 'X'){
        console.log("DIV ANTERIOR", divSelecionada[divSelecionada.length -2])
        divSelecionada[divSelecionada.length -2].classList.remove('peca-1')
        divSelecionada[divSelecionada.length -2].classList.add('none')
        array[indexSelecionado[indexSelecionado.length - 2]] = 'X'

        console.log("DIV ATUAL", divSelecionada[divSelecionada.length -1])
        divSelecionada[divSelecionada.length -1].classList.remove('none')
        divSelecionada[divSelecionada.length -1].classList.add('peca-1')
        array[index] = 'XA'
        
      }else {
        console.log("MOVIMENTO INVALIDO!")
      }
    }


    if(pecaSelecionada[pecaSelecionada.length - 2]){
      console.log("TEM PEÇA SELECIONADA: -2", pecaSelecionada[pecaSelecionada.length -2],'INDEX')

      if( (pecaSelecionada[pecaSelecionada.length -2] === 'XB' )
      
      && pecaSelecionada[pecaSelecionada.length -1] === 'X'){
        console.log("DIV ANTERIOR", divSelecionada[divSelecionada.length -2])
        divSelecionada[divSelecionada.length -2].classList.remove('peca-2')
        divSelecionada[divSelecionada.length -2].classList.add('none')
        array[indexSelecionado[indexSelecionado.length - 2]] = 'X'

        console.log("DIV ATUAL", divSelecionada[divSelecionada.length -1])
        divSelecionada[divSelecionada.length -1].classList.remove('none')
        divSelecionada[divSelecionada.length -1].classList.add('peca-2')
        array[index] = 'XB'
        
      }else {
        console.log("MOVIMENTO INVALIDO!")
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