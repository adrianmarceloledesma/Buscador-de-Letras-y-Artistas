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
      try{
        const url = `https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`;
        const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaLetra.artista}`
  
        // haer que 2 APIS diferentes ninguna espere a la otra sino que individualmente una u otra vayan apareciendo(poniendo
        // Promesas)
        const [letras, info] = await Promise.all([
          axios(url),
          axios(url2)
        ]);
       
        setLetra(letras.data.lyrics);
        setBanda(info.data.artists[0]);
         
    
      }catch{
        setBanda(0)
      }
    }
    consultarApiLetra();

 
    
  }, [busquedaLetra,banda,])
 



  return (
    <div >
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
