import React, { useRef } from 'react';
import './NavBar.css';
import './HomeButton.css';

export default function NavigationBar() {
  const navigatioBarRef = useRef();

  const scrollDownToNav = () =>
    navigatioBarRef.current.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <div>
      <div className='welcome-button'>
        <button onClick={scrollDownToNav}>START</button>
      </div>
      <div>
        <nav>
          <ul ref={navigatioBarRef} className='navigation'>
            <li>
              <a href='#about' className='link'>
                About
              </a>
            </li>
            <li>
              <a href='#about' className='link'>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' className='link'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
