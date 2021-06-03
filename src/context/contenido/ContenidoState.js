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
    try {
      const resulPodcast = await clienteAxios.get(
        `http://localhost:3100/api/contenidos/seccion/Podcast`
      );
      // console.log(resulPodcast.data.Resultados);
      dispatch({
        type: "GET_CONTENIDO_PODCAST",
        payload: resulPodcast.data.Resultados,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getContenidoVideoclip = async () => {
    try {
      const resulVideo = await clienteAxios.get(
        `http://localhost:3100/api/contenidos/seccion/Videoclip`
      );
      // console.log(resulVideo);
      dispatch({
        type: "GET_CONTENIDO_VIDEOCLIP",
        payload: resulVideo.data.Resultados,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getContenidoDirecting = async () => {
    try {
      const resulDirecting = await clienteAxios.get(
        `http://localhost:3100/api/contenidos/seccion/Directing`
      );
      // console.log(resulDirecting);
      dispatch({
        type: "GET_CONTENIDO_DIRECTING",
        payload: resulDirecting.data.Resultados,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getContenidoCinema = async () => {
    try {
      const resulCinema = await clienteAxios.get(
        `http://localhost:3100/api/contenidos/seccion/Cinematography`
      );
      // console.log(resulCinema);
      dispatch({
        type: "GET_CONTENIDO_CINEMA",
        payload: resulCinema.data.Resultados,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteContenido = async (_id) => {
    try {
      const delcontenido = await clienteAxios.delete(
        `http://localhost:3100/api/contenidos/${_id}`
      );
      console.log(delcontenido);
      dispatch({
        type: "DELETE_CONTENIDO",
        payload: delcontenido.data._id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const crearContenido = async () => {
    try {
      const crearContenidos = await clienteAxios.post(
        "http://localhost:3100/api/contenidos/"
      );
      dispatch({
        type: "CREAR_CONTENIDO",
        payload: crearContenidos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getContenido = async () => {
    try {
      const contenidoAll = await clienteAxios.get(
        "http://localhost:3100/api/contenidos"
      );
      console.log(contenidoAll);
      dispatch({
        type: "GET_CONTENIDO_ALL",
        payload: contenidoAll.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ContenidoContext.Provider
      value={{
        contenido: state.contenido,
        getContenidoPodcast,
        getContenidoVideoclip,
        getContenidoDirecting,
        getContenidoCinema,
        getContenido,
        deleteContenido,
        crearContenido,
      }}
    >
      {props.children}
    </ContenidoContext.Provider>
  );
};
export default ContenidoState;
