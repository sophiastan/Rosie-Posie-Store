module.exports = app => {
  const url = "https://f8be9e9a5202f857b3ba2422d320d03c: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@rosie-posiee.myshopify.com/admin/api/2020-07/";
  
  app.post('/product/:product_id/variants.json', async function (req, res) {
    function addProduct() {
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(req.body)
      })
    }

    const api_response = await addProduct();
    const data = await api_response.json();

    res.json(data);
  })
}