import React, { useEffect, useContext } from "react";
import ContenidoContext from "../../context/contenido/ContenidoContext";

export const DirPlayer = () => {
  const { contenido, getContenidoDirecting } = useContext(ContenidoContext);

  useEffect(() => {
    getContenidoDirecting();
  }, []);
//   console.log(contenido);

  return (
    <>
      {contenido.map((cont) => (
        <div
          className=" embed-responsive embed-responsive-16by9 mb-3 container mt-3 border"
          key={cont._id}
        >
          <iframe
            src={`https://player.vimeo.com/video/${cont.url}`}
            frameBorder="0"
            title={cont.descripcion}
            webkitallowfullscreen="True"
            mozallowfullscreen="True"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </>
  );
};
