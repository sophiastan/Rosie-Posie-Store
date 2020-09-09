// Service for communicating with Shopify Product API and server
class ProductService {
  constructor() {
    this.baseUrl = process.env.API_URL;
    // this.username = process.env.USERNAME;
    // this.password = process.env.PASSWORD;
    // this.shop = process.env.SHOP;
    // this.baseUrl = `https://${username}:${password}@${shop}/admin/api/2020-07`;
    // this.baseUrl = "https://f8be9e9a5202f857b3ba2422d320d03c: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@rosie-posiee.myshopify.com/admin/api/2020-07";
  }

  // Retrieves a list of products
  getProductList = async () => {
    const url = this.baseUrl + `/products.json`;
    const resp = await fetch(url);
    const body = await resp.json();
    return body;
  }

  // Retrieves a count of products
  getProductCount = async () => {
    const url = this.baseUrl + `/products/count.json`;
    const resp = await fetch(url);
    const body = await resp.json();
    return body;
  }

  // Retrieves a single product
  getProduct = async (product_id) => {
    if (product_id) {
      const url = this.baseUrl + `/products/${product_id}.json`;
      const resp = await fetch(url);
      const body = await resp.json();
      return body;
    }
    return null;
  }

  // Create a new product 
  postProduct = async (title, description, type, price) => {
    // const url = this.baseUrl + `/products.json`;
    const url = '/products.json';
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        product: {
          title: title,
          body_html: description,
          product_type: type,
          variants: [{
            price: price
          }]
        }
      })
    });

    console.log(url);
    return await resp.json();
  }

  // Updates a product
  putProduct = async (product_id, body) => {
    const url = this.baseUrl + `/products/${product_id}.json`
    const resp = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body)
    });

    return await resp.json();
  }

  // Deletes a product
  deleteProduct = async (product_id) => {
    const url = this.baseUrl + `/products/${product_id}.json`
    const resp = await fetch(url, {
      method: 'DELETE'
    });

    return await resp.json();
  }
}

export default ProductService;