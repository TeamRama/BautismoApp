import React from 'react';
import Portada from '../Assets/carusel/portada.png';

const Navigation = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
   
    <img className="portada" src={Portada} />

  </div>
</div>
        </div>
    );
};

export default Navigation;