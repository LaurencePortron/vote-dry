const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`listening on port: ${PORT}`);
});
