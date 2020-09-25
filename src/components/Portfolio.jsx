import React from 'react'
import '../css/Portfolio.css'
import translateme from '../assets/translateme.png'
import rickandmorty from '../assets/rickMorty.png'
import rickandmorty1 from '../assets/rickMorty1.png'
import tonester from '../assets/tonester.png'
import uber from '../assets/uber.png'
import portfoliov1 from '../assets/portfoliov1.png'
import portfoliov2 from '../assets/portfoliov2.png'
import marsrover from '../assets/marsrover.png'

import { Container } from 'react-bootstrap';

export const Portfolio = () => {
    return (
        <Container>
        <div className='portfolio'>
            <div className='portfolio__header'>
                 <h3 >Recent Projects</h3>
            </div>
           <div className='portfolio__grid'>
                    <a><img className='portfolio__img' src={translateme}/></a>
                    <a><img className='portfolio__img' src={portfoliov1}/></a>
                    <a><img className='portfolio__img' src={tonester}/></a>
                    <a><img className='portfolio__img' src={uber}/></a>
                    <a><img className='portfolio__img' src={rickandmorty1}/></a>
                    <a><img className='portfolio__img' src={portfoliov2}/></a>
                    <a><img className='portfolio__img' src={marsrover}/></a>
            </div>
        </div>
         </Container>
    )
}
export default Portfolio;



// <img className='portfolio__img' src={translateme}/>