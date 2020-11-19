import React, { useRef } from 'react';
import './NavBar.css';

export default function NavBar() {
  const navigatioBarRef = useRef();

  const scrollDownToNavWho = () =>
    navigatioBarRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  const scrollDownToNavWhat = () =>
    navigatioBarRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  const scrollDownToNavWhy = () =>
    navigatioBarRef.current.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <div>
      <div>
        <nav className='navigationBar'>
          <ul ref={navigatioBarRef} className='navigation'>
            {/* <img
              className='logo'
              src='https://www.pinclipart.com/picdir/middle/30-306799_clip-royalty-free-download-transparent-images-pluspng-church.png'
              alt='churchlogo'
            /> */}

            <li>
              <a onClick={scrollDownToNavWho} href='#about' className='link'>
                Who we are
              </a>
            </li>
            <li>
              <a onClick={scrollDownToNavWhat} href='#about' className='link'>
                What we do
              </a>
            </li>
            <li>
              <a onClick={scrollDownToNavWhy} href='#contact' className='link'>
                Why we do it
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
