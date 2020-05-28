import React, {Fragment} from 'react'

function Artista(props) {
   


   
   
    return (

        <Fragment>
             {/*  para que hasta que no hayya una peticion no se muestre el titulo  */}
            {
                Object.keys(props.banda).length > 1 ?
                  
                  <div>
                  <h2>{props.banda.strArtist}</h2>
                  <img src={props.banda.strArtistThumb} alt=""/>
                 <h3>Biografia</h3>
                 <p>{props.banda.strBiographyES}</p>
              </div> : <p>dsadsads</p>
            }
        </Fragment>
    )
}

export default Artista
