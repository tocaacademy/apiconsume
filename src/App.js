import {useState,useEffect} from 'react'

function App() {
  const [pokemon, setPokemon] = useState(null)

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(res=>res.json())
    .then(res=>setPokemon(res.res))
  },[])
  return (
    <>
      {(pokemon!=null)?
      (
              <div className="container">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
                <h1>{pokemon.name} ({pokemon.id})</h1>

              </div>
        ):(<h1>Cargando...</h1>)
      }
    </>
  );
}

export default App;
