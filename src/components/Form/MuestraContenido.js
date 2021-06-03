import React, { useEffect, useContext } from "react";
import ContenidoContext from "../../context/contenido/ContenidoContext";

export const MuestraContenido = () => {
  const { contenido, getContenido, deleteContenido } = useContext(ContenidoContext);



  useEffect(() => {
    getContenido();
    deleteContenido();
    
  }, [])
  console.log()
  
  

  return (
    <>
      <div className="container-fluid ">
        <div className="table-responsive">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th scope="col">_id</th>
                <th scope="col">Código URL</th>
                <th scope="col">Descripción</th>
                <th scope="col">Sección</th>
                <th scope="col">Eliminar o Editar</th>
              </tr>
            </thead>
            {contenido.length > 0 ? (
              contenido.map((conts) => (
                <tbody key={conts._id}>
                  <tr>
                    <th scope="row"> {conts._id}</th>
                    <td>{conts.url}</td>
                    <td>{conts.descripcion}</td>
                    <td>{conts.seccion}</td>
                    <td>
                      <button
                        
                        onClick={() => deleteContenido(conts._id)}
                        type="button"
                        className="btn btn-danger  mr-2"
                      >
                        <i className="fas fa-2x fa-trash"></i>
                      </button>
                      <button type="button" className="btn btn-success">
                        <i className="fas fa-2x fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <h4 className="text-center mt-2 "> No hay contenido...</h4>
            )
            }
          </table>
        </div>
      </div>
    </>
  );
};
