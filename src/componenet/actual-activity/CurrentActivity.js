import React from 'react'
import {useQuery, useUserQuery} from '../../hooks/useQuery'

export const CurrentActivity = (token) => {
    
    const query =  useQuery(token);
    const userQuery = useUserQuery(token);
    const {images,id} = userQuery
    
    const{device, item,is_playing } = query;

    const image = (images && Array.isArray(images)) ? images[0].url : '';
    const band = (item) ? item.artists[0].name : null;
    const songName = (item) ? item.name : null;
    const album = (item && item.album && item.album.name) ? item.album.name : null;



    //let name = 'dds'
    //console.log('is_playing',is_playing)

    return (
        <div id ="header-app"> 
            <div className="left">
                <div key={id} >
                    <div><img id="profile-image" src={image}  x="0" y="0" height="168px" preserveAspectRatio="xMidYMid slice"  width="168px" ></img></div>
                    
                </div>
            </div>
            <div className="right">
                <div style={{color:"green"}} >
                    <strong>Currently Activity</strong><br/>
                    <strong>Is listening: </strong>{is_playing ? ('Yes'): ('No')} <br/>
                    <strong>Band: </strong>{band}<br/>
                    <strong>Song: </strong>{songName}<br/>
                    <strong>Album: </strong>{album}<br/>
                </div>

            </div>
        </div>
    )
}
