import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

// Imagenes
import Directing from "../../assets/videos/DIRECCION.mp4";
import Cinematography from "../../assets/videos/CINEMATOGRAFIA.mp4";
import Videoclip from "../../assets/videos/VIDEOCLIP.mp4";


export const Cards = () => {
  return (
    <div className="container mt-2">
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
          <div className="card mt-2 mb-2 ">
            <video className="embed-responsive embed-responsive-16by9" type="video/mp4" autoPlay loop muted>
              <source className='embed-responsive-item' src={Directing} />
            </video>
            <div className="card-img-overlay d-flex justify-content-center">
              <Link style={{textDecoration:'none'}} to="/Directing">
                <h2 className="card-title text-center text-white text-uppercase">Directing</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-2 mb-2">
            <video className="embed-responsive embed-responsive-16by9" type="video/mp4" autoPlay loop muted>
              <source className='embed-responsive-item' src={Cinematography} />
            </video>
            <div className="card-img-overlay d-flex justify-content-center">
              <Link style={{textDecoration:'none'}} to="/Cinematography">
                <h2 className="card-title text-center text-white text-capitalize">Cinematography</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-2 mb-2">
            <video className="embed-responsive embed-responsive-16by9" type="video/mp4" autoPlay loop muted>
              <source className='embed-responsive-item' src={Videoclip} />
            </video>
            <div className="card-img-overlay d-flex justify-content-center">
              <Link style={{textDecoration:'none'}} to="/Videoclip">
                <h2 className="card-title text-center text-white text-uppercase" >Videoclip</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-2 mb-2">
            <video className="embed-responsive embed-responsive-16by9" type="video/mp4" autoPlay loop muted >
              <source className='embed-responsive-item' src={Videoclip} />
            </video>
            <div className="card-img-overlay d-flex justify-content-center">
              <Link style={{textDecoration:'none'}} to="/Podcast">
                <h2 className="card-title  text-white text-uppercase">Podcast</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
