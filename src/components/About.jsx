import React from 'react'
import '../css/About.css'
import aboutImg from '../assets/about.png'

export const About = () => {
    const about= "Hello, I'm Mario, I am a Full-stack web developer based on Washington, DC. I have expericen with multiple programing langues as well as data base. I have experice with: "
    return (
        <div className="about">
            <img className='about__img' src={aboutImg}/>
            <div className='about__info'>
            <h2>About Me</h2>
             {about}
             <div className='about_tech'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
             </div>
             <div className='about__donwload'>
             <span className='about__donwloadBtn'>Download</span>
             </div>
            </div>
           
        </div>
    )
}
export default About;