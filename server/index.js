const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotEnvOptions = {
  path: __dirname + '../.env'
}

require('dotenv').config(dotEnvOptions);

// Main App
const app = express();

app.use(bodyParser.json());
app.use(cors());

require('./routes/productRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})