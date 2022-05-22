import './Celula.css'
function Celula({classe, index}) {
    return (
      <div className={classe}>
          
            {/* <Peca className={peca} /> */}
            {/* <div className={peca}></div> */}
           
        {index}
      </div>
    );
  }
  
  export default Celula;