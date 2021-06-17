import React, { useContext, useState } from "react";
import ContenidoContext from "../../context/contenido/ContenidoContext";

export const CargaContenido = () => {
  const { CrearContenido } = useContext(ContenidoContext);
  
  const [nuevoContenido, setNuevoContenido] = useState({
    url: "",
    descripcion: "",
    seccion: "",
  });
  
  const { url, descripcion, seccion } = nuevoContenido;
  
  const onInputChange = (e) => {
    setNuevoContenido({ 
      ...nuevoContenido, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    if (url.trim() === '' && descripcion.trim() === '' ) {
      alert('la url y la descripcion es requerido')
      return;
    }
    await CrearContenido(nuevoContenido)
  };
  console.log(nuevoContenido);
  return (
    <>
      <div className="container-fluid">
        <h2 className="m-3">Carga de contenido</h2>
        <form className="border m-3 " role='form' onSubmit={handleSubmit} >
          <div className="mb-3 m-2">
            <label htmlFor="codigoURL" className="form-label">
              Código URL
            </label>
            <input
              type="text"
              className="form-control "
              id="codigoURL"
              aria-describedby="codigoURL"
              name="url"
              value={url}
              onChange={onInputChange}
            />
          </div>
          <div className="m-2">
            <label htmlFor="descripcion" className="form-label">
              Descripción o Título
            </label>
            <textarea
              className="form-control"
              id="descripcion"
              rows="3"
              name="descripcion"
              value={descripcion}
              onChange={onInputChange}
            ></textarea>
          </div>
          <div className="m-2">
            <div>
              <label htmlFor="seccion" className="form-label">
                Secciones
              </label>
            </div>
            <select
              className="form-select form-select-lg mb-3"
              aria-label="Default select example"
              name="seccion"
              value={seccion}
              onChange={onInputChange}
            >
              <option default selected>
                Elige sección
              </option>
              <option defaultValue>Directing</option>
              <option defaultValue>Cinematography</option>
              <option defaultValue>Videoclip</option>
              <option defaultValue>Podcast</option>
            </select>
          </div>
          <button type="submit" className="btn btn-secondary m-2">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};
