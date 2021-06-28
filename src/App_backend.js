
import React, { useContext, useState, lazy, Suspense } from 'react'
//import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import AlbumsContextProvider from './componenet/Albums/AlbumsContext'

import { Playlists } from './componenet/Playlists/Playlists'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

//import Query from './componenet/actual-activity/Query'
import { CurrentActivity } from './componenet/actual-activity/CurrentActivity'
import{BrowserRouter as Router} from 'react-router-dom'

import {
  //BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router' //'react-router-dom'
import { ListContext,ListContextConsumer } from './hooks/ListContext'

import { ShowSongs } from './componenet/SongsOfList/ShowSongs'
//const ShowSongs = React.lazy(() => import('./componenet/SongsOfList/ShowSongs'))

//const ShowSongs = lazy(() => import('./componenet/SongsOfList/ShowSongs'));
//const ShowSongs = lazy(async () => (await import('./componenet/SongsOfList/ShowSongs')).then((result) =>{ return result.ShowSongs}))
//const ShowSongs = lazy(() => import('./componenet/SongsOfList/ShowSongs').then(result=>{return(result)}))
/*
const ShowSongs = lazy(() => new Promise(async resolve => {
  const module = await import("./componenet/SongsOfList/ShowSongs").then(setTimeout((module) =>{
    console.log('moduleo',module)
    return(module)
  },1000));
  //setTimeout(() => resolve(module), 1000);
}));


const ShowSongs = lazy(() => new Promise((resolve, reject) => {
  import('./componenet/SongsOfList/ShowSongs')
    .then(result => {console.log(result)
      return(result.ShowSongs)})
    .catch(reject);
}));

*/


const App = () => {
  const searchId = 'Muse';
  const token = Cookies.get('spotifyAuthToken')
  const [selectedList, setSelectedList] = useState('5keNTpdIbcFHGLGTm03B2I');

  return (
    <Router>
      <div className='app'>
        <div id="header">

          <CurrentActivity token={token} />
        </div>
        {/*<ListContext.Provider value={{selectedList, setSelectedList}}>*/}
        <div id="sidebar">
          <Playlists token={token}></Playlists>
        </div>
        <div id="main">
          <Switch>
            {token ? (
              <>
                  
                  <Route path="/songs_of_list/:id"  render={
                    props => (
                    <Suspense fallback={<p>Loading ...</p>}>
                    <ShowSongs {...props} token={token} />
                    </Suspense>
                    )}>
                    {/*<ShowSongs token={token} listId="5keNTpdIbcFHGLGTm03B2I" ></ShowSongs>*/}
                    
                  </Route>
                
              </>
            ) : (
              // Display the login page

              <div>

                <p>NOOOO Autorizado</p>
                <SpotifyAuth
                  redirectUri='http://localhost:3000'
                  clientID='bb61555b9c4b48398ccf4b57227670cd'
                  scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
                />
              </div>

            )}


          </Switch>
        </div>
        {/*</ListContext.Provider>*/}
        <div id="footer">


        </div>


      </div>
    </Router>
  )

}

export default App















import React, { useContext, useState, lazy, Suspense } from 'react'
//import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import AlbumsContextProvider from './componenet/Albums/AlbumsContext'

import { Playlists } from './componenet/Playlists/Playlists'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

//import Query from './componenet/actual-activity/Query'
import { CurrentActivity } from './componenet/actual-activity/CurrentActivity'
import { BrowserRouter as Router } from 'react-router-dom'

import {
  //BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router' //'react-router-dom'
import { ListContext, ListContextConsumer } from './hooks/ListContext'

import { ShowSongs } from './componenet/SongsOfList/ShowSongs'
//const ShowSongs = React.lazy(() => import('./componenet/SongsOfList/ShowSongs'))

//const ShowSongs = lazy(() => import('./componenet/SongsOfList/ShowSongs'));
//const ShowSongs = lazy(async () => (await import('./componenet/SongsOfList/ShowSongs')).then((result) =>{ return result.ShowSongs}))
//const ShowSongs = lazy(() => import('./componenet/SongsOfList/ShowSongs').then(result=>{return(result)}))
/*
const ShowSongs = lazy(() => new Promise(async resolve => {
  const module = await import("./componenet/SongsOfList/ShowSongs").then(setTimeout((module) =>{
    console.log('moduleo',module)
    return(module)
  },1000));
  //setTimeout(() => resolve(module), 1000);
}));


const ShowSongs = lazy(() => new Promise((resolve, reject) => {
  import('./componenet/SongsOfList/ShowSongs')
    .then(result => {console.log(result)
      return(result.ShowSongs)})
    .catch(reject);
}));

*/


const App = () => {
  const searchId = 'Muse';
  const token = Cookies.get('spotifyAuthToken')
  const [selectedList, setSelectedList] = useState('5keNTpdIbcFHGLGTm03B2I');

  return (
    <Router>
      <div className='app'>
        <div id="header">

          <CurrentActivity token={token} />
        </div>
        {/*<ListContext.Provider value={{selectedList, setSelectedList}}>*/}
        <div id="sidebar">
          <Playlists token={token}></Playlists>
        </div>
        <div id="main">
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <>
              
                <Route path="/songs_of_list/:id" render={
                  props => (

                    <ShowSongs {...props} token={token} />

                  )}>
                  {/*<ShowSongs token={token} listId="5keNTpdIbcFHGLGTm03B2I" ></ShowSongs>*/}

                </Route>
              
              <Route path="/login">
                <>

                  <p>NOOOO Autorizado</p>
                  <SpotifyAuth
                    redirectUri='http://localhost:3000'
                    clientID='bb61555b9c4b48398ccf4b57227670cd'
                    scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
                  />
                </>
              </Route>

            </>



          </Switch>
          </Suspense>
        </div>
        {/*</ListContext.Provider>*/}
        <div id="footer">


        </div>


      </div>
    </Router>
  )

}

export default App