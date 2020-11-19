const { response } = require('express');
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`listening on port: ${PORT}`);
});

const productorsList = [
  {
    id: 0,
    name: 'Rob',
    localisation: 'colorado',
    alcohol: 'Vodka',
    ratings: 10,
  },
  {
    id: 1,
    name: 'Mickey',
    localisation: 'calfornia',
    alcohol: 'Wiskey',
    ratings: 10,
  },
  {
    id: 2,
    name: 'Al Capone',
    localisation: 'ilinois',
    alcohol: 'Gin',
    ratings: 10,
  },
  {
    id: 3,
    name: 'Brew fidelity',
    localisation: 'oregon',
    alcohol: 'base',
    ratings: 10,
  },
  {
    id: 4,
    name: 'Peaky',
    localisation: 'texas',
    alcohol: 'Wiskey',
    ratings: 10,
  },
  {
    id: 5,
    name: 'EnnemyOfTheState',
    localisation: 'Missouri',
    alcohol: 'Wiskey',
    ratings: 10,
  },
  {
    id: 6,
    name: 'Taboo',
    localisation: 'South Dakota',
    alcohol: 'Wiskey',
    ratings: 10,
  },
  {
    id: 7,
    name: 'SuperFreak',
    localisation: 'Utah',
    alcohol: 'Wiskey',
    ratings: 10,
  },
  {
    id: 8,
    name: 'SoftBrewer',
    localisation: 'Kansas',
    alcohol: 'Wiskey',
    ratings: 10,
  },
  {
    id: 9,
    name: 'KaneWest',
    localisation: 'florida',
    alcohol: 'rhum',
    ratings: 10,
  },
  {
    id: 10,
    name: 'GeorgesWashington',
    localisation: 'Virginia',
    alcohol: 'Calvados',
    ratings: 10,
  },
];

app.get('/productorsList', (req, res) => {
  res.status(200).json(productorsList);
});
