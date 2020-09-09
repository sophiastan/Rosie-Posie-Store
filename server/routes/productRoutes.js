// const Shopify = require('shopify-api-node');

module.exports = app => {
  this.url = process.env.API_URL;
  // const shopifyApi = require('shopify-api-node');
  // this.Shopify = new shopifyApi({
  //   shop: process.env.SHOP,
  //   apiKey: process.env.USERNAME,
  //   password: process.env.PASSWORD
  // })
  // const username = process.env.USERNAME;
  // const password = process.env.PASSWORD;
  // const shop = process.env.SHOP;
  // const url = `https://${username}:${password}@${shop}/admin/api/2020-07`;
  // const url = "https://f8be9e9a5202f857b3ba2422d320d03c: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@rosie-posiee.myshopify.com/admin/api/2020-07";
  
  // Retrieves a list of products
  app.get('/products.json', async function (req, res) {
    function getProductList() {
      const endpoint = "/list";
      return fetch(url + endpoint, {
        method: 'GET'
      });
    }

    const product_list = await getProductList();
    const data = await product_list.json();

    res.json(data);
  });

  // Retrieves a count of products
  app.get('/products/count.json', async function (req, res) {
    function getProductCount() {
      const endpoint = "/count";
      return fetch(url + endpoint, {
        method: 'GET'
      });
    }

    const product_count = await getProductCount();
    const data = await product_count.json();

    res.json(data);
  });

  // Retrieves a single product
  app.get('/products/:product_id.json', async function (req, res) {
    function getProduct() {
      const endpoint = "/products/" + req.params.product_id;
      return fetch(url + endpoint, {
        method: 'GET'
      });
    }

    const product = await getProduct();
    const data = await product.json();

    res.json(data);
  });

  // Create a new product
  // app.post('/products.json', async function (req, res) {
  //   function postProduct() {
  //     // const endpoint = "/products";
  //     // return fetch(url + endpoint, {
  //     //   method: 'POST',
  //     //   body: JSON.stringify(req.body)
  //     // });
  //     return fetch(url, {
  //       method: 'POST',
  //       body: JSON.stringify(req.body)
  //     });
  //   }

  //   console.log(url);

  //   const api_response = await postProduct();
  //   const data = await api_response.json();

  //   res.json(data);
  // });

  // const Router = require('koa-router');
  // const router = new Router();
  // router.post('/admin/api/2020-07/products.json', async function (req, res) {
  //   try {
  //     const results = await fetch("https://rosie-posiee.myshopify.com/admin/api/2020-07/products.json", {
  //       headers: {
  //         'Authorization': 'Basic ' + base64.encode(process.env.USERNAME + ':' + process.env.PASSWORD) 
  //       },
  //       method: 'POST',
  //       body: JSON.stringify(req.body)
  //     })
  //     .then(response => response.json())
  //     .then(json => {
  //       return json;
  //     });
  //   } catch (err) {
  //     console.log(err)
  //   }
  // })
  // app.post('/admin/api/2020-07/products.json', async function (req, res) {
  //   try {
  //     const product = await Shopify.product.create(req.body); 
  //     const data = await product.json();

  //     res.json(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });

   app.post('/admin/api/2020-07/products.json', async function (req, res) {
    function postProduct() {
      return fetch("https://rosie-posiee.myshopify.com/admin/api/2020-07/products.json", {
        headers: {
          'Authorization': 'Basic ' + base64.encode(process.env.USERNAME + ':' + process.env.PASSWORD) 
        },
        method: 'POST',
        body: JSON.stringify(req.body)
      });
    }

    console.log(url);

    const api_response = await postProduct();
    const data = await api_response.json();

    res.json(data);
  });
  
}