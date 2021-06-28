
import React, { useContext, useState, lazy, Suspense } from 'react'
//import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import AlbumsContextProvider from './componenet/Albums/AlbumsContext'

import { Playlists } from './componenet/Playlists/Playlists'

import PageNotFound from './componenet/Not-Found/PageNotFound'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

//import Query from './componenet/actual-activity/Query'
import { CurrentActivity } from './componenet/actual-activity/CurrentActivity'
import{BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundary from './componenet/ErrorBoundry/ErrorBoundary'

import {
  //BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router' //'react-router-dom'
import { ListContext,ListContextConsumer } from './hooks/ListContext'

//import { ShowSongs } from './componenet/SongsOfList/ShowSongs'
const ShowSongs = React.lazy(() => import('./componenet/SongsOfList/ShowSongs'))

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
        <ErrorBoundary>
          <Playlists token={token}></Playlists>
        </ErrorBoundary>
        </div>
        <div id="main">
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            
            {token ? (
              <>
                 <Switch>
                  <Route exact path="/songs_of_list/:id"  render={
                    props => (
                    <ErrorBoundary>
                      <ShowSongs {...props} token={token} />
                    </ErrorBoundary>
                    )}>
                    
                  </Route>
                  <Route path="*" component={PageNotFound}/>
                  </Switch>
                
               
              </>
            ) : (
              // Display the login page

              <div>

                <p>NOOOO Autorizado</p>
                <SpotifyAuth
                  redirectUri='https://spoty-zeta.vercel.app/'
                  clientID='bb61555b9c4b48398ccf4b57227670cd'
                  scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
                />
              </div>

            )}

            <Route path="*" component={PageNotFound}/>
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