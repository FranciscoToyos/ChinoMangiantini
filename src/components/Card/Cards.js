import React from "react";
import { Link } from "react-router-dom";

import './card.css'

// Imagenes
import Directing from "../../assets/images/directing.jpg";
import Cinematography from "../../assets/images/Cinematography.jpg";
import Videoclip from "../../assets/images/videoclip.jpg";
import Podcast from "../../assets/images/podcast.png";

export const Cards = () => {
  return (
    <div className="container mt-2">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card mb-2">
            <img src={Directing} className="card-img-top" alt="..." />
            <div className="card-body">
            <Link to='/Directing'>

              <h4 className="card-title text-center text-light">Directing</h4>
            </Link>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img src={Cinematography} className="card-img-top" alt="..." />
            <div className="card-body">
            <Link to='/Cinematography'>

              <h4 className="card-title text-center text-light">Cinema</h4>
            </Link>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-2">
            <img src={Videoclip} className="card-img-top" alt="..." />
            <div className="card-body">
            <Link to='Videoclip'>

              <h4 className="card-title text-center text-light">Videoclip</h4>
            </Link>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-2 mb-2">
            <img src={Podcast} className="card-img-top" alt="..." />
            <div className="card-body">
            <Link to='Podcast'>

              <h4 className="card-title text-center text-light">Podcast</h4>
            </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
