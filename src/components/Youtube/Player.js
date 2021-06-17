import React, { useEffect, useContext } from "react";
import ContenidoContext from "../../context/contenido/ContenidoContext";

export const Player = () => {
  const { contenidos, getContenidoVideoclip } = useContext(ContenidoContext);
  // console.log(contenido)

  useEffect(() => {
    getContenidoVideoclip();
  },[]);

  return (
    <>
      {contenidos.map((video) => (
        
          <div className=" embed-responsive embed-responsive-16by9 mb-3 container mt-3" key={video._id}>
            <iframe
              className="embed-responsive-item border"
              type="text/html"
              src={`http://www.youtube.com/embed/${video.url}`}
              frameBorder="0"
              title={video.descripcion}
            />
          </div>
        
      ))}
    </>
  );
};
