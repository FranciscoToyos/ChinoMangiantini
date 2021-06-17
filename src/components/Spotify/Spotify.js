import React, { useEffect } from "react";
import { useContext } from "react";
import ContenidoContext from "../../context/contenido/ContenidoContext";

export const Spotify = () => {

  const { contenidos ,getContenidoPodcast } = useContext(ContenidoContext);

  useEffect(() => {
    getContenidoPodcast();
  }, []);
  // console.log(contenido)

  return (
    <>
      <div className="container mt-4" >
      {
        contenidos.map(contenidos => (
          <div className="spotify" key={contenidos._id}>
          <iframe
            src={`https://open.spotify.com/embed/episode/${contenidos.url}`}
            width="100%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="chino"
          ></iframe>
        </div>
        ))
      }
        
      </div>
    </>
  );
};
