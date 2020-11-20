import React from 'react';
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='hideSiteFooter'>
      <div className='footerIcon'>
        <img src={fb} className='icon' />
        <img src={insta} className='icon' />
        <img src={youtube} className='icon' />
        <img src={twitter} className='icon' />
      </div>
      <p className='footerCatchphrase'>
        Made With Love by <strong>- Les Petits Pedestres -</strong>2020
      </p>
    </div>
  );
};

export default Footer;
