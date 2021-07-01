import React,{useContext, useEffect, useRef} from 'react'
import { useUserPlayLists } from '../../hooks/useQuery'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import { ListContext } from '../../hooks/ListContext'
import {Link} from 'react-router-dom'

export const Playlists = (token) => {
    const playLists = useUserPlayLists(token);
    const { items } = playLists;
    const accordeon = useRef(true);
    //const{selectedList, setSelectedList} = useContext(ListContext);
    //console.log('listSelected',selectedList);  
    useEffect(() =>{
        return () => {
            accordeon.current = false;
        }

    },[])


    console.log('items', items)
/*
    return (
        <div>
            <strong>Playlists</strong>
            {(items) ? (
                items.map(item => (
                    <div key={item.id} ><strong>{item.name}</strong></div>
                ))) : (
                <p>The user has no lists</p>
            )

            }

        </div>
    )
*/
    return (
        <div id="playlist-div">
            <Card>
                    <Card.Header>
                    <strong>Playlists</strong>
                    </Card.Header>
                
                {(items) ? (
                    items.map(item => (
                       
                            <Card.Body> <strong><Link ref={accordeon} to={'/songs_of_list/' + item.id} >{item.name}</Link></strong></Card.Body>
                       
                    ))) : (
                        <div>
                    <p>The user has no lists</p>
                    </div>
                )
                }
            </Card>
        </div>
    )
}

Playlists.propTypes = {
    token: PropTypes.string.isRequired,
}