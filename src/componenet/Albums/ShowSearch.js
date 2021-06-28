
import React, {useContext} from 'react'
import {AlbumsContext} from './AlbumsContext'
import Outcome from './Outcome'


const ShowSearch = () =>{
    //const {album_name, artist_name, song_name, album_place} = useContext(AlbumsContext);
    const {searchResults,search,doneFetch} = useContext(AlbumsContext);
    //const {album_name, artist_name, song_name, album_place} = searchResults[0];
    console.log('Contexto search = '+search)
    console.log(searchResults)
    console.log(doneFetch)
    return (
        <div>
            {doneFetch && Array.isArray(searchResults) ?
            (<div>
            <p> es array Album: </p>
                <Outcome result ={searchResults}/>
             </div>   )
            :(<p> NO es array Album: </p>)
            }
          
        </div>
      );
}

export default ShowSearch;

