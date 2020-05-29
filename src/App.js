import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Artista from './components/Artista';


function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [banda, setBanda] = useState({});

  useEffect( () => {
    // la 1era vez "busquedaLetra" va estar vacio, entonces return porque no queremos haer nada
    // es una buena forma de revisar si un objeto esta vacio
    if(Object.keys(busquedaLetra).length === 0) return;
    // ni puta idea porque puso asi el return

    const consultarApiLetra = async() =>{
        const url = `https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`;
        const resultado = await axios (url)

      try{ 
        setLetra(resultado.data.lyrics);
         
      }catch{
        setLetra('0')
      }
    }
    
    
    const consultarApiBanda = async() =>{
      const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaLetra.artista}`
      const resultado = await axios(url)
      try{
        setBanda(resultado.data.artists[0])
      }
      catch{
        setBanda(0)
      }
    }
 
    consultarApiLetra();
    consultarApiBanda();   
  }, [busquedaLetra,banda]);
 



  return (
    <div className="contenedor">
      <div className="contenedor-formulario">
        <Formulario 
            setBusquedaLetra={setBusquedaLetra}
        />
      </div>
      
      <div className="contenedor-resultados">
        <div className="contenedor-cancion">
          <Cancion
            letra={letra}
          />
        </div>
        <div className="contenedor-artista">
          <Artista
            banda={banda}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
