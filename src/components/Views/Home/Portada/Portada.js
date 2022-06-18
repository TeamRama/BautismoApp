import React from 'react';
import portada from '../../../Assets/Portada/portada.png';
import "./Portada.css";


const Portada = () => {
    return (
        <div>
          
 <div class="portada-container">
   <img className="img-portada" src={portada} />
   <div className="portada-textos">
        <h1 className="portada-h1" >PILAR & MATIAS</h1>
        <hr className="portada-hr"></hr>
        <h2 className="portada-h2">24-09-2022 </h2>
  </div>
</div>

</div>
       
    );
};

export default Portada;