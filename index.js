const express = require('express');
const bodyParser = require('body-parser');
require('./services/ProductService');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ hi: 'bye' });
});

require('./routes/productRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);