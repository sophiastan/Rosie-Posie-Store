// Service for communicating with Shopify Product API and server
class ProductService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  // Retrieves a list of products
  getProductList = async () => {
    const url = 'http://localhost:5000/getProductList';
    const res = await fetch(url);
    return await res.json();
  }

  // Retrieves a count of products
  getProductCount = async () => {
    const url = 'http://localhost:5000/getProductCount';
    const res = await fetch(url);
    return await res.json();
  }

  // Retrieves a single product
  getProduct = async (product_id) => {
    if (product_id) {
      const url = `http://localhost:5000/${product_id}getProduct`;
      const res = await fetch(url);
      return await res.json();
    }
    return null;
  }

  // Create a new product 
  postProduct = async (title, description, type, price) => {
    const url = 'http://localhost:5000/postProduct';

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
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

    return await res.json();
  }

  // Updates a product
  putProduct = async (product_id, body) => {
    const url = `http://localhost:5000/${product_id}/putProduct`;
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(body)
    });

    return await res.json();
  }

  // Deletes a product
  deleteProduct = async (product_id) => {
    const url = `http://localhost:5000/${product_id}/deleteProduct`
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    });

    console.log(product_id);
    return await res.json();
  }
}

export default ProductService;