import React from 'react';
import './Hero.css';
import Button from '../Button/Button';


const Hero = () => {
  return (
    <section className="hero">
        <div className="left-part">
            <p>Real People, <br></br>Real Insights</p>
            <p>Get our qualified UX experts to analyze your <br></br>session recordings and tell you what you should fix. <br></br>Get direct insights to fuel your growth.</p>
            <Button />
        </div>

        <div className="right-part">
            <img src="./img/img001.png" alt=""/>
        </div>
    </section>
  )
}

export default Hero