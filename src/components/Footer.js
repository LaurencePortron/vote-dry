import React from 'react';
import './Footer.css';
import jesus from '../images/jesus.png';

export default function Footer() {
  return (
    <div>
      <div>
        <nav className='footer'>
          <ul>
            <img src={jesus} className='logoFooter' alt='jesus' />
            <li className='footer-quote'>
              "With men this is impossible, but with God all things are
              possible." 
              <br />
              Matthew 19:26
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
