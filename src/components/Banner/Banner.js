import React from "react";
import Img from "../../assets/images/chino1.jpg";

import "./banner.css";

export const Banner = () => {
  return (
    <>
      <div className="card text-white">
        <img src={Img} className="card-img" alt="Persona agachada entre plantas" />
        <div className="card-img-overlay d-flex ">
        <div className='text-wrap'>
          <h5 className="card-title text-center"><strong>Chino Mangiantini</strong></h5>
          <p className="card-text ">
            Filmmaker,Cinematographer,Storyteller,Podcaster
          </p>
        </div>
        </div>
      </div>
    </>
  );
};
