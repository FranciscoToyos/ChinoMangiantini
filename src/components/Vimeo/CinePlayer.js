import React , { useEffect, useContext } from 'react'
import ContenidoContext from "../../context/contenido/ContenidoContext";

export const CinePlayer = () => {

    const { contenidos, getContenidoCinema } = useContext(ContenidoContext);

    useEffect(() => {
        getContenidoCinema();
      }, []);
      // console.log(contenido)

    return (
        <>
      {contenidos.map((cont) => (
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
    )
}
