import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import ContenidoReducer from "./ContenidoReducer";
import ContenidoContext from "./ContenidoContext";

const ContenidoState = (props) => {
  const initialState = {
    contenido: [],
  };

  const [state, dispatch] = useReducer(ContenidoReducer, initialState);

  const getContenidoPodcast = async () => {
    const resulPodcast = await clienteAxios.get(
      `http://localhost:3100/api/contenidos/seccion/Podcast`
    );
    // console.log(resulPodcast.data.Resultados);
    dispatch({
        type: 'GET_CONTENIDO_PODCAST',
        payload: resulPodcast.data.Resultados
    })
  };
  const getContenidoVideoclip = async () => {
    const resulVideo = await clienteAxios.get(
      `http://localhost:3100/api/contenidos/seccion/Videoclip`
    );
    // console.log(resulVideo);
    dispatch({
      type: 'GET_CONTENIDO_VIDEOCLIP',
      payload: resulVideo.data.Resultados
    })
  };
  const getContenidoDirecting = async () => {
    const resulDirecting = await clienteAxios.get(
      `http://localhost:3100/api/contenidos/seccion/Directing`
    );
    // console.log(resulDirecting);
    dispatch({
      type:'GET_CONTENIDO_DIRECTING',
      payload: resulDirecting.data.Resultados
    })
  };
  const getContenidoCinema = async () => {
    const resulCinema = await clienteAxios.get(
      `http://localhost:3100/api/contenidos/seccion/Cinematography`
    );
    // console.log(resulCinema);
    dispatch({
      type:'GET_CONTENIDO_CINEMA',
      payload: resulCinema.data.Resultados
    })
  };

  // const getContenido = () => {

  // }
  return (
    <ContenidoContext.Provider
      value={{
        contenido: state.contenido,
        getContenidoPodcast,
        getContenidoVideoclip,
        getContenidoDirecting,
        getContenidoCinema
      }}
    >
      {props.children}
    </ContenidoContext.Provider>
  );
};
export default ContenidoState;
