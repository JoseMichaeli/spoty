import React from 'react'

const Outcome = ({result}) => {
   
    return (
        <div>
            
            {
                result.map(({album_name,artist_name}, i) => (

                    <div key={i} ><strong>Nombre album:</strong> {album_name} <br/><strong>Artista:</strong> {artist_name}</div>
                    
                ))
            }
           
           
        </div>
    )
 
}
export default Outcome;