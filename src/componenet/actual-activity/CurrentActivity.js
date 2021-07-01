import React from 'react'
import {useQuery, useUserQuery} from '../../hooks/useQuery';
import SoptyImage from '../../images/spotify_log.png';

export const CurrentActivity = (token) => {
    
    const query =  useQuery(token);
    const userQuery = useUserQuery(token);
    const {display_name,images,id} = userQuery
    
    const{device, item,is_playing } = query;

    const image = (images && Array.isArray(images)) ? images[0].url : '';
    const band = (item) ? item.artists[0].name : null;
    const songName = (item) ? item.name : null;
    const album = (item && item.album && item.album.name) ? item.album.name : null;
    const tokenValue =token.token;



    console.log('SoptyImage',SoptyImage)
    console.log('token',tokenValue)
    //let name = 'dds'
    console.log('userQuery',userQuery)

    return (
        <div id ="header-app"> 
            <div className="left">
                <div key={id} >
                    <div>
                        {tokenValue ?(
                             <img id="profile-image" src={image}  x="0" y="0" height="168px" preserveAspectRatio="xMidYMid slice"  width="168px" ></img>
                        ):(
                            <img id="profile-image" src={SoptyImage}  x="0" y="0" height="168px" preserveAspectRatio="xMidYMid slice"  width="168px" ></img>
                        )}
                       
                     </div>
                    
                </div>
            </div>
            
                {tokenValue ?(
                    <div className="right">
                    <div style={{color:"white"}} >
                        <h1>{display_name}'s Profile</h1>
                        <strong>Currently is  {is_playing ? (' playing '): (' Not playing anything')} </strong> <br/>
                        <strong>{is_playing ? (songName + ' song '): ('')}  </strong><br/>
                    <strong>{is_playing ? ('of the band ' + band):('')} </strong><br/>
                    <strong>{is_playing ? ('from the Album ' + album ) : ('')}</strong><br/>
                    </div>
                    </div>
                ):
                (
                    <div className="start-header"><h1 style={{color:"white"}}>Sopty Profile</h1></div>
                )}
                

            
        </div>
    )
}
