import React, { useRef } from 'react';
import './NavBar.css';

export default function NavBar() {
  const navigatioBarRef = useRef();

  const scrollDownToNav = () =>
    navigatioBarRef.current.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <div>
      <div className='welcome-button'>
        {/* <button onClick={scrollDownToNav}>START</button> */}
      </div>
      <div>
        <nav>
          <ul ref={navigatioBarRef} className='navigation'>
            <li>
              <a onClick={scrollDownToNav} href='#about' className='link'>
                Who we are
              </a>
            </li>
            <li>
              <a onClick={scrollDownToNav} href='#about' className='link'>
                What we do
              </a>
            </li>
            <li>
              <a onClick={scrollDownToNav} href='#contact' className='link'>
                Why we do it
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
