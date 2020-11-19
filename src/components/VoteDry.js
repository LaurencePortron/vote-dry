import React from 'react';
import './VoteDry.scss';

const VoteDry = () => {
  return (
    <div className='voteDryBody'>
      <h1>VOTE DRY</h1>
      <div className='voteDrySections'>
        <h2>Who We Are</h2>
        <div className='whoWeAre'>
          {' '}
          <p>
            We are a protestant church willing to spread the Protestant way of
            life. We currently number more than 150 000 members and around 50
            000 children in our midst.
          </p>
          <p>
            Our community is mostly composed of ordinary people, like you and me
            who just want to provide a safe and stable environment for our
            family.
          </p>{' '}
          <p>
            Our pastor <strong>Pierre Genthon</strong> arrived from his previous
            post in Lyon -France last summer. He officiates at most Sunday
            services and is also in charge of children’s Sunday school.
          </p>
        </div>

        <h2>What We Do</h2>
        <div className='whatWeDo'>
          <p>
            In these difficult times we are facing a new issue : the after war
            wave of immigration coming from Europe. Their way of living tends to
            threatened our culture and values with their atheist lifestyle.
          </p>
          <p>
            Thus, we need to stand up and fight for our RIGHTS, for our COUNTRY.
            We need you, your stenght and energy. Together we are stronger.
          </p>{' '}
          <p>Vote wise, VOTE DRY.</p>
        </div>
        <h2>Why We Stand</h2>
        <div className='whyWeStand'>
          <div className='whyWeStandContent'>
            <img />
            <p>
              Alchool is bringing violence and insecurity to our peacefull
              community. When you are under the influence of this drug, god has
              no power over your actions. You lost your free will and thats when
              crimes, rapes, violences emerge.
            </p>
          </div>
          <div className='whyWeStandContent'>
            <img />
            <p>Fight for your sister-children.</p>
          </div>
          <div className='whyWeStandContent'>
            <img />
            <p>
              It is dangerous to give your money to bad intention brewers
              instead of providing to your family. Shall the Mothers and
              Children be Sacrified to the Financial Greed of the liquor
              trafic ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteDry;
