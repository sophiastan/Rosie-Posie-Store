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
app.get('/', (req, res) => {
  res.send('Hello');
})

// app.post('/postProduct', async function (req, res) {
//   // function postProduct() {
//   //   // const endpoint = "/products";
//   //   // return fetch(url + endpoint, {
//   //   //   method: 'POST',
//   //   //   body: JSON.stringify(req.body)
//   //   // });
//   //   return fetch(url, {
//   //     method: 'POST',
//   //     body: JSON.stringify(req.body)
//   //   });
//   // }
//   res.send('post product :(');
//   console.log("called products.json route from node server!");
//   console.log("url: ", this.url);
//   // console.log(url);

//   // const api_response = await postProduct();
//   // const data = await api_response.json();

//   // res.json(data);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})