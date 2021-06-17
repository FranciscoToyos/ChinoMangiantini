import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import ContenidoReducer from "./ContenidoReducer";
import ContenidoContext from "./ContenidoContext";
import {CREAR_CONTENIDO,GET_CONTENIDO_PODCAST,GET_CONTENIDO_VIDEOCLIP, GET_CONTENIDO_DIRECTING,  GET_CONTENIDO_CINEMA,DELETE_CONTENIDO, GET_CONTENIDO_ALL} from '../types'

const baseUrl =  'https://chinomangiantini-api.herokuapp.com/api/contenidos/'

const ContenidoState = (props) => {
  const initialState = {
    contenido: [],
  };
  

  const [state, dispatch] = useReducer(ContenidoReducer, initialState);

  const getContenidoPodcast = async () => {
    try {
      const resulPodcast = await clienteAxios.get(
        `${baseUrl}/seccion/Podcast`
      );
      // console.log(resulPodcast.data.Resultados);
      dispatch({
        type: GET_CONTENIDO_PODCAST,
        payload: resulPodcast.data.Resultados,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getContenidoVideoclip = async () => {
    try {
      const resulVideo = await clienteAxios.get(
        `${baseUrl}/seccion/Videoclip`
      );
      // console.log(resulVideo);
      dispatch({
        type: GET_CONTENIDO_VIDEOCLIP,
        payload: resulVideo.data.Resultados,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getContenidoDirecting = async () => {
    try {
      const resulDirecting = await clienteAxios.get(
        `${baseUrl}/seccion/Directing`
      );
      // console.log(resulDirecting);
      dispatch({
        type: GET_CONTENIDO_DIRECTING,
        payload: resulDirecting.data.Resultados,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getContenidoCinema = async () => {
    try {
      const resulCinema = await clienteAxios.get(
        `${baseUrl}/seccion/Cinematography`
      );
      // console.log(resulCinema.data);
      dispatch({
        type: GET_CONTENIDO_CINEMA,
        payload: resulCinema.data.Resultados,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteContenido = async (_id) => {
    try {
      const delcontenido = await clienteAxios.delete(
        `${baseUrl}/${_id}`
      );

      dispatch({
        type: DELETE_CONTENIDO,
        payload: delcontenido.data._id,
      });
      console.log(delcontenido);
    } catch (err) {
      console.log(err);
    }
  };

  const CrearContenido = async () => {
    try {
      const CrearContenidos = await clienteAxios.post(
        `${baseUrl}`
        
      );
      dispatch({
        type: CREAR_CONTENIDO,
        payload: CrearContenidos,
      });
      console.log(CrearContenidos);
    } catch (err) {
      console.log(err);
    }
  };

  const getContenido = async () => {
    try {
      const contenidoAll = await clienteAxios.get(
        `${baseUrl}`

      );
      // console.log(contenidoAll.data);
      dispatch({
        type: GET_CONTENIDO_ALL,
        payload: contenidoAll.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ContenidoContext.Provider
      value={{
        contenidos: state.contenido,
        getContenidoPodcast,
        getContenidoVideoclip,
        getContenidoDirecting,
        getContenidoCinema,
        getContenido,
        deleteContenido,
        CrearContenido,
      }}
    >
      {props.children}
    </ContenidoContext.Provider>
  );
};
export default ContenidoState;
