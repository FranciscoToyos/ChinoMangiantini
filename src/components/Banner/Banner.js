import React from "react";
import Img from "../../assets/images/camaracel.jpg";


export const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
       
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img} className="img-fluid w-100" style={{height:300}} alt="..." />
            <div className="carousel-caption ">
              <h5>Hola!! </h5>
              <p>
                ...
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
