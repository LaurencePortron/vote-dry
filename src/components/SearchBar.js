import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { ProducerContext } from '../context/ProducerContext';
import _ from 'lodash';
import './SearchBar.css';

const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    backgroundColor: 'white',
    borderRadius: '30px',
    height: '40px',
    width: '100%',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const {
    producers,
    setInputValue,
    setSelectedAlcohol,
    inputValue,
    alcoholSearched,
    setAlcoholSearched,
  } = useContext(ProducerContext);

  const searchForAlcohol = () => {
    axios
      .get(`http://192.168.68.111:5000/search?alcohol=${inputValue}`)
      .then((res) => setAlcoholSearched(res.data));
  };

  let alcoholArray = producers.map((producer) => {
    return producer.alcohol;
  });

  let uniqueAlcohol = _.uniqBy(alcoholArray);

  return (
    <div className='searchbar'>
      <Autocomplete
        freeSolo
        id='free-solo-2-demo'
        disableClearable
        className={classes.root}
        onChange={(event, value) => setSelectedAlcohol(value)}
        onInputChange={(event, inputValue) => setInputValue(inputValue)}
        options={uniqueAlcohol}
        renderInput={(params) => (
          <TextField
            {...params}
            margin='normal'
            InputProps={{
              ...params.InputProps,
              type: 'search',
              className: classes.input,
              placeholder: 'Search for alcohol...',
              endAdornment: (
                <SearchIcon
                  style={{ color: 'black', cursor: 'pointer' }}
                  onClick={searchForAlcohol}
                />
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
