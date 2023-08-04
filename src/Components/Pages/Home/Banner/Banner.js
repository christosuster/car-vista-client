import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://car-vista-client.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        className="banner-carousel"
      >
        {products?.map((product) => (
          <div key={product.image} className="carouselItem mb-5 relative">
            <img src={product.image} />
            <h1 className="text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-500 font-extrabold text-6xl carousel-text">
              {product.car_name}
            </h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
