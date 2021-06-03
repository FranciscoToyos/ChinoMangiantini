import React from "react";

export const CargaContenido = () => {
  return (
    <>
      <div className="container-fluid">
        <h2 className="m-3">Carga de contenido</h2>
        <form className="border m-3 ">
          <div className="mb-3 m-2">
            <label htmlFor="codigoURL" className="form-label">
              Código URL
            </label>
            <input
              type="email"
              className="form-control "
              id="codigoURL"
              aria-describedby="codigoURL"
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
            >
              <option selected>Elige sección</option>
              <option value="1">Directing</option>
              <option value="2">Cinematography</option>
              <option value="3">Videoclip</option>
              <option value="3">Podcast</option>
            </select>
          </div>
          <button type="submit" className="btn btn-secondary m-2">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
