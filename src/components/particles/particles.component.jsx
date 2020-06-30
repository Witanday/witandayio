import React from 'react'
import Particles from 'react-particles-js'
import './particles.styles.scss';


const ParticleBg=()=> {
    return (
<Particles className='particles'
params={{
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 6
        }
        
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}} />
    )
}

export default  ParticleBg