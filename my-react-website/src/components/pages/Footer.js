import React from 'react';
import { Button } from '../Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-heading'>
                MaDCoding power brought you this dope Wesbite
            </p>
            <p className='footer-text'>
                I am still working on it lol
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Hit Me Up</Button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Footer