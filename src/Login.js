import React from 'react'
import {Container} from 'react-bootstrap'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=bb61555b9c4b48398ccf4b57227670cd&response_type=code&redirect_uri=http://localhost:8080&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {
    return <Container>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>Login</a>
    </Container>
}