import React, {useState} from 'react'

function Formulario(props) {
    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    });
    const [error, setError] =useState(false);


    // funcion a cada input para leer su contenido
    const actualizarState = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    
    const handlerClick = (e) => {
        e.preventDefault();
        // validacion
        if(busqueda.artista.trim() === '' || busqueda.cancion.trim()=== ''){
            setError(true)
            return
        }
        setError(false);

        props.setBusquedaLetra(busqueda)


  


    }



    return (
        <form onSubmit={handlerClick}>

            <fieldset>
                <h1>Buscador Letras Canciones</h1>

                {
                    error && <p className="error">Error! Revisar los Campos</p> 
                }

                <div className="input-contenedor">
                   <label>Artista</label>
                   <input type="text" 
                      placeholder="Nombre Artista" 
                      value={busqueda.artista} 
                      name="artista" 
                      onChange={actualizarState} 
                      autoFocus
                    />
                </div>           
                <div className="input-contenedor">
                   <label>Cancion</label>
                   <input type="text"
                      placeholder="Nombre Cancion" 
                      value={busqueda.cancion} 
                      name="cancion" 
                      onChange={actualizarState}
                    />
                   <button >Buscar</button>
                </div>
          
                

            </fieldset>
        </form>
    )
}

export default Formulario;
