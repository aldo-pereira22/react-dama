import Peca from './Peca'
import './Celula.css'
function Celula({classe, peca}) {
    return (
      <div className={classe}>
          
            {/* <Peca className={peca} /> */}
            <div className={peca}></div>
           

      </div>
    );
  }
  
  export default Celula;