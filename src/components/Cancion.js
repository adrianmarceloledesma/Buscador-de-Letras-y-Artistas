import React, { Fragment } from 'react'

function Cancion(props) {
  // para que hasta que no hayya una peticion no se muestre el titulo
    if(props.letra.length === 0) return null;

    return (
        <Fragment>
            <h2>Letra de la Canción</h2>
            <div className="cont-p">
               <p>{props.letra}</p>
            </div>
            
        </Fragment>
    )
}

export default Cancion
