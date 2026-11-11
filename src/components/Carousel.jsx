import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="public/images/slide1.png" class="d-block w-100 h-100" alt="slide1" />
      </div>
      <div class="carousel-item">
        <img src="public/images/slide2.png" class="d-block w-100 h-100" alt="slide2" />
      </div>
      <div class="carousel-item">
        <img src="public/images/slide3.png" class="d-block w-100 h-100" alt="slide3" />
      </div>
      <div class="carousel-item">
        <img src="public/images/slide4.png" class="d-block w-100 h-100" alt="slide4" />
      </div>
      <div class="carousel-item">
        <img src="public/images/slide5.png" class="d-block w-100 h-100" alt="slide5" />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

)
}

export default Carousel