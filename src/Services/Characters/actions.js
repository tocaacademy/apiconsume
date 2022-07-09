import axios from 'axios'

export const getCharacters= async()=>{
    const characters = await axios.get("https://rickandmortyapi.com/api/character")
    
    return characters.data.results
}

export const getCharacter= async(id)=>{
    const character = await axios
                            .get(`https://rickandmortyapi.com/api/character/${id}`)

    return character.data
}


export const getEpisodes= async(ids)=>{
    const episodes = await axios
                            .get(`https://rickandmortyapi.com/api/episode/${ids}`)

    return episodes.data
}