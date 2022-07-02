import { useState, useEffect } from "react";
import { getCharacters } from "../../Services/Characters/actions";
import Character from "../../Components/Characters/character";

const Characters = () =>{//Listar personajes en tarjeta
    const [characters,setCharacters] = useState([])
    useEffect(()=>{
        const getChars = async()=>{
            const personajes = await getCharacters()
            
            setCharacters(personajes)
        }

        getChars()
    },[])

    return(
        <div style={{padding:"30px", display:"flex", flexFlow: "row wrap", justifyContent:"space-between"}}>
            {
                 characters.map(
                        (char)=>(<Character character={char}/>)
                        )  
            }
        </div>
    )
}


export default Characters