import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-4.mp4' autoPlay loop muted/>
        <h1>ADVENTURE BABY</h1>
        <p>Leggo</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Check It Out!
            </Button>
        </div>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Check Out Projects! <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;