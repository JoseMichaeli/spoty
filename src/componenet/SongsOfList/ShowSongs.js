import React, {useContext, useEffect, useState} from 'react'
import { useUserPlayListsSongs } from '../../hooks/useQuery'
import PropTypes from 'prop-types'
import { ListContext } from '../../hooks/ListContext'
import { useParams } from "react-router-dom";
import { set } from 'js-cookie';




const ShowSongs = ({token}) => {
    //const [selectedList, setSelectedList] = useContext(ListContext)
    //const{selectedList, setSelectedList} = useContext(ListContext);
    //const [songs, setSongs] = useState({name : "",images : [], tracks: {}});
    let params = useParams();
    let {id} = params;
    console.log('id', id)

    console.log('params',params)
    console.log('token',token)

   
    //setSongs(useUserPlayListsSongs(token,id));
   /* useEffect(()=>{setSongs(useUserPlayListsSongs(token,id));}
    ,[id]

    )*/
    const songs = useUserPlayListsSongs(token,id)
  
    
    console.log('respuestas',songs)
    //const { items } = songs;
    const {name:listName,images:listImage, tracks} = songs;
    let songsArray;
    if(songs && tracks){
       //console.log('listImage',listImage[0])
     songsArray = tracks.items; 
    }
    



    

    console.log('songs', songs)
    return(
        {songs} && Array.isArray(listImage) && listImage.length > 0 ? (
        <div>
            <div>
            <div id="list-image" > 
            <img  src={listImage[0].url}  x="0" y="0" height="168px" preserveAspectRatio="xMidYMid slice"  width="168px" ></img>
            </div>
            <div id="list-titles">
            <h1>{`\u00A0\u00A0\u00A0 ${listName}`}</h1>
            </div>
            </div>
            <ul className="song-list-ul">
                <div id="list-line">
            {
                (Array.isArray(songsArray)) ? 
                (
                        songsArray.map( (song) =>{
                            return(<li key={song.track.id} ><img src={song.track.album.images[2].url}></img><strong>{`\u00A0\u00A0\u00A0` + song.track.name + ' - ' + song.track.artists[0].name }</strong></li>)

                        }
                        )
                )
                :
                (
                    <strong>The list has not songs</strong>
                )
            }
            </div>
            </ul>

        </div>
        ):(
            <div>Empty list</div>
        )
    )
}
ShowSongs.propTypes = {
    token: PropTypes.string.isRequired,
    listId: PropTypes.string,
}

export default ShowSongs;