import React from 'react'

function Header() {
  return (
    <div className='flex flex-col md:flex-row justify-center mt-36 mb-10'>
      <div className="carousel w-[80%] md:w-[40%]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://furniture-kabukithemes.myshopify.com/cdn/shop/products/12_copy.jpg?v=1450255351"
            className="w-[80%] mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/43/93/92/439392e21df14650c2afe24066d42943.jpg"
            className="w-[80%] mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/d5/ee/d5/d5eed57c9e128ef9e46ca125a7093b0f.jpg"
            className="w-[80%] mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/72/98/ec/7298ec17255b7b27f874c9d376d1a47d.jpg"
            className="w-[80%] mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      <img
        src="https://aribadirect.com/img/slider/home-4/left.jpg"
        alt="Shoes"
        className="h-96 w-full md:w-auto mt-5 md:mt-0"
      />
    </div>
  )
}

export default Header
