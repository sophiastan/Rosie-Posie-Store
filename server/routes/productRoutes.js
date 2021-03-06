const fetch = require('node-fetch');

module.exports = app => {
  const baseUrl = "https://f8be9e9a5202f857b3ba2422d320d03c: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@rosie-posiee.myshopify.com";
  
  // Retrieves a list of products
  app.get('/getProductList', async function (req, res) {
    const endpoint = "/admin/api/2020-07/products.json";
    const product_list = await fetch(baseUrl + endpoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    });

    const data = await product_list.json();
    res.json(data);
  });

  // Retrieves a single product
  app.get('/getProduct/:product_id', async function (req, res) {
    const endpoint = "/admin/api/2020-07/products/" + req.params.product_id + ".json";
    const product = await fetch(baseUrl + endpoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    });

    const data = await product.json();
    res.json(data);
  });

  // Create a new product
  app.post('/postProduct', async function (req, res) {
    const endpoint = "/admin/api/2020-07/products.json";

    const api_response = await fetch(baseUrl + endpoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(req.body)
    });

    const data = await api_response.json();
    console.log("successfully posted product\n", JSON.stringify(req.body));
    res.json(data);
  });

  app.delete('/:product_id/deleteProduct', async function (req, res) {
    console.log("Deleted: ", req.params.product_id);
    const endpoint = `/admin/api/2020-07/products/${req.params.product_id}.json`;

    const api_response = await fetch(baseUrl + endpoint, {
      method: 'DELETE'
    })

    const data = await api_response.json();
    res.json(data);
  });

   // Updates a product
   app.put('/:product_id/updateProduct', async function (req, res) {
    const endpoint = `/admin/api/2020-07/products/${req.params.product_id}.json`;

    const api_response = await fetch(baseUrl + endpoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(req.body)
    });

    const data = await api_response.json();
    console.log("successfully updated product\n", data);
    res.json(data);
  });

    // // Retrieves a count of products
  // app.get('/products/count.json', async function (req, res) {
  //   function getProductCount() {
  //     const endpoint = "/count";
  //     return fetch(url + endpoint, {
  //       method: 'GET'
  //     });
  //   }

  //   const product_count = await getProductCount();
  //   const data = await product_count.json();

  //   res.json(data);
  // });
  
}