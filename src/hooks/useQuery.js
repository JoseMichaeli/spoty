import React, {useState,useEffect} from 'react';
import 'babel-polyfill';

const url = 'https://api.spotify.com/v1/me/';
const url2 = 'https://api.spotify.com/v1/';

const getActualActivity = async (url,token,data = {}) => {

  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      data: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log('response',response);
    return response.json();
    //return response; 
}

export const useQuery =  (tokenQuery) =>{
  const {token:tokenString} = tokenQuery;

  const [token, setToken] = useState();
  const [doneQuery, setDoneQuery] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setToken(tokenString);
    (!doneQuery) && (
      getActualActivity(url + 'player',tokenString, { answer: 42 })
      .then(data => {
        setDoneQuery(true);
        //console.log('DATA',data); // JSON data parsed by `data.json()` call
        // const respuestaString = JSON.stringify(data);
        setSearchResults(data);
      })
      .catch(error => console.log(error) )
    )
  },[tokenQuery]);  
  return (searchResults);
}

export const useUserQuery = (tokenQuery) => {
  const {token:tokenString} = tokenQuery;

  const [token, setToken] = useState();
  const [doneQuery, setDoneQuery] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setToken(tokenString);
    (!doneQuery) && (
      getActualActivity(url,tokenString, { answer: 42 })
      .then(data => {
        setDoneQuery(true);
        //console.log('MY DATA',data); 
        setSearchResults(data);
      })
      .catch(error => console.log(error) )
    )
  },[tokenQuery]);
    
    
  return (searchResults);
}

export const useUserPlayLists = (tokenQuery) => {
  const {token:tokenString} = tokenQuery;

  const [token, setToken] = useState();
  const [doneQuery, setDoneQuery] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setToken(tokenString);
    (!doneQuery) && (
      getActualActivity(url + 'playlists',tokenString, { answer: 42 })
      .then(data => {
        setDoneQuery(true);
        console.log('MY PLAYLISTS',data); 
        setSearchResults(data);
      })
      .catch(error => console.log(error) )
    )
  },[tokenQuery]);
    
    
  return (searchResults);
}


export const useUserPlayListsSongs = (tokenQuery,playListId) => {
  const [token, setToken] = useState();
  const [resultados, setResultados] = useState({});
  console.log('useUserPlayListsSongs ID',playListId)
  
  useEffect(() => {
    setToken(tokenQuery);
    (getActualActivity(url2 + 'playlists/' + playListId,tokenQuery, { answer: 42 })
      .then(data => {
        console.log('PLAYLIST SONGS',data); 
        setResultados(data);
      })
      .catch(error => console.log(error) )
    )
  },[tokenQuery,playListId]);

  return (resultados);
}

