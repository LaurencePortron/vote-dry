import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { ProducerContext } from '../context/ProducerContext';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    backgroundColor: 'white',
    borderRadius: '30px',
    height: '40px',
    width: '70%',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const { producers, setInputValue, setSelectedAlcohol } = useContext(
    ProducerContext
  );

  let alcoholArray = producers.map((producer) => {
    return producer.alcohol;
  });

  let uniqueAlcohol = _.uniqBy(alcoholArray);

  return (
    <div>
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
              //   endAdornment: <SearchBarLink />,
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
