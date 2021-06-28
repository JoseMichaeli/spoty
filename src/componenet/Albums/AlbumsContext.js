
import React from 'react'
import {createContext, useState, useEffect} from 'react'
//import { ModalBody } from 'react-bootstrap'
//import UseAuthentification from "./UseAuthentification"
import SpotifyWebApi from 'spotify-web-api-node'

export const AlbumsContext = createContext([]);


const spotifyApi = new SpotifyWebApi({
    clientId: 'bb61555b9c4b48398ccf4b57227670cd',

})

const AlbumsContextProvider = ({children,code,searchId}) => {
    const accessToken = code;
    const [search, setSearch] = useState(searchId);
    const [searchResults, setSearchResults] = useState([]);
    const [doneFetch, setDoneFetch] = useState(false);
    //setSearch(searchId);
    

    
    useEffect(() => {
        spotifyApi.setAccessToken(accessToken)
    },[accessToken]);
    
   // useEffect(() => spotifyApi.searchTracks(search), [searchResults] );

    useEffect(() => getTrack(search), [search]);

    const getTrack =  (search) => {
        if(!accessToken) return;
        if(!search) return setSearchResults([]);
        spotifyApi.setAccessToken(accessToken);
        spotifyApi.searchTracks(search)
        .then(res => {
            setDoneFetch(true);
            //console.log(res.body.tracks.items);
            //setSearchResults(res.body.tracks.items)
            
            setSearchResults(res.body.tracks.items.map(item=> {
                return{ 
                    album_name: item.album.name,
                    artist_name: item.artists[0].name, 
                    song_name: item.name, 
                    album_place: item.track_number

                }
            })
            );
            
        })
        .catch(err =>{
            console.log(err);
        })
      };


    if(searchResults&&searchResults.length>13){
    console.log(searchResults);
    console.log(searchResults[10].song_name);
    console.log(searchResults[11].song_name);
    console.log(searchResults[12].song_name);
    }
    
    return (
        
        <AlbumsContext.Provider
            value= {{searchResults,search,doneFetch}}
        >
{children}
        </AlbumsContext.Provider>
    );
};
export default AlbumsContextProvider;

