import React, { useState } from 'react';
import './Filter.scss';

export default function Filter() {
  const [isSelected, setIsSelected] = useState('');
  const [isBoozeSelected, setBoozeSelected] = useState('');
  const [isCitySelected, setCitySelected] = useState('');

  const handleCity = () => {
    return (
      <div>
        {isSelected === 'City' ? (
          <div>
            <label for='localisation'>What city are you looking for ?</label>
            <select
              value=''
              type='select'
              className='filteredBtn'
              onChange={(e) => setCitySelected(e.target.value)}
            >
              <option value=''>Choose Your City</option>
              <option value='Ashburn'>Ashburn</option>
              <option value='Chicago'>Chicago</option>
              <option value='Denver'>Denver</option>
              <option value='Houston'>Houston</option>
              <option value='Kansas City'>Kansas City</option>
              <option value='Los Angeles'>Los Angeles</option>
              <option value='Miami'>Miami</option>
              <option value='Portland'>Portland</option>
              <option value='Saint Louis'>Saint Louis</option>
              <option value='Salt Lake City'>Salt Lake City</option>
              <option value='Sioux Falls'>Sioux Falls</option>
            </select>
          </div>
        ) : (
          <p>Breh</p>
        )}
      </div>
    );
  };

  const handleBooze = () => {
    return (
      <div>
        {isSelected === 'Alcohol' ? (
          <div>
            <label for='alcohol'>What booze are you looking for ?</label>
            <select
              type='select'
              className='filteredBtn'
              onChange={(e) => setBoozeSelected(e.target.value)}
            >
              <option value=''>Choose Your Booze</option>
              <option value='Base'>Base</option>
              <option value='Calvados'>Calvados</option>
              <option value='Gin'>Gin</option>
              <option value='Rhum'>Rhum</option>
              <option value='Vodka'>Vodka</option>
              <option value='Whiskey'>Whiskey</option>
            </select>
          </div>
        ) : (
          handleCity()
        )}
      </div>
    );
  };

  return (
    <div>
      {isSelected === '' ? (
        <div>
          <label for='selection'>What are you looking for ?</label>
          <select
            type='select'
            className='selectionBtn'
            onChange={(e) => setIsSelected(e.target.value)}
          >
            <option value=''>Choose Your Selection</option>
            <option value='Alcohol'>Alcohol</option>
            <option value='City'>City</option>
          </select>
        </div>
      ) : (
        handleBooze()
      )}
    </div>
  );
}
