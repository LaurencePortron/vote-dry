import React, { useRef } from 'react';
import './VoteDry.scss';
import './NavBar.css';
import church from '../images/church.png';
/* import voteDry1 from '../images/voteDry1.jpeg'; */
import voteDry2 from '../images/voteDry2.jpg';
import voteDry3 from '../images/voteDry3.jpg';
/* import voteDry4 from '../images/voteDry4.jpg'; */
import voteDry5 from '../images/voteDry5.jpg';

const VoteDry = () => {
  const whoRef = useRef();
  const whatRef = useRef();
  const whyRef = useRef();

  const scrollDownToNavWho = () =>
    whoRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  const scrollDownToNavWhat = () =>
    whatRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  const scrollDownToNavWhy = () =>
    whyRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  return (
    <div className='voteDryBody'>
      <div>
        <nav className='navigationBar'>
          <ul className='navigation'>
            <img src={church} className='logoNav' alt='church' />
            <li className='firstLi'>
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
      <h1>VOTE DRY</h1>
      <div className='voteDrySections'>
        <h2 ref={whoRef}>Who We Are</h2>
        <div className='whoWeAre'>
          {' '}
          <p>
            We are a protestant church determined to spread the Protestant way
            of life. We currently number more than 150 000 members and around 50
            000 children in our midst.
          </p>
          <p>
            Our community is mostly composed of ordinary people, like you and me
            who just want to provide a safe and stable environment for our
            family.
          </p>{' '}
          <p>
            Our pastor <strong>Pierre Genthon</strong> arrived from his previous
            service in Lyon -France last summer. He officiates at most Sunday
            services and is also in charge of children’s Sunday school.
          </p>
        </div>

        <h2 ref={whatRef}>What We Do</h2>
        <div className='whatWeDo'>
          <p>
            In these difficult times we are facing a new issue : the after war
            wave of immigration coming from Europe. Their way of living tends to
            threaten our culture and values with their atheist lifestyle.
          </p>
          <p>
            Thus, we need to stand up and fight for our <strong>RIGHTS</strong>,
            for our <strong>COUNTRY</strong>. We need you, your stenght and
            energy. Together we are stronger.
          </p>{' '}
          <p>
            Vote wise, vote<strong> DRY</strong>.
          </p>
        </div>
        <h2 ref={whyRef}>Why We Stand</h2>
        <div className='whyWeStand'>
          <div className='whyWeStandContent'>
            <img src={voteDry3} className='whyImg' />
            <p>
              Alcohol is bringing violence and insecurity to our peacefull
              community. When you are under the influence of this drug, god has
              no power over your actions. You lost your free will and that's
              when crimes, rapes, violence emerge.
            </p>
          </div>
          <div className='whyWeStandContent2'>
            <img src={voteDry5} className='whyImg' />
            <p>
              Men would go to the tavern, drink away mortgage money, drink so
              much they couldn’t go to work the next day, beat their wives,
              abuse their children. Brothers, we beg you not to drink and not to
              sell!”
            </p>
          </div>
          <div className='whyWeStandContent'>
            <img src={voteDry2} className='whyImg' />
            <p>
              It is dangerous to give your money to malicious brewers instead of
              providing to your family. Shall the Mothers and Children be
              Sacrified to the Financial Greed of the liquor trafic ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteDry;
