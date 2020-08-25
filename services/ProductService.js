// Service for communicating with Shopify Product API and server
class ProductService {
  constructor() {
    this.baseUrl = "https://f8be9e9a5202f857b3ba2422d320d03c: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@rosie-posiee.myshopify.com/admin/api/2020-07/";
  }

  // Retrieves a list of product variants
  getProductList = async (product_id) => {
    if (product_id) {
      const url = this.baseUrl + `/products/${product_id}/variants.json`;
      const resp = await fetch(url);
      const body = await resp.json();
      return body;
    }
    return null;
  }

  // Recieve a count of all Product Variants
  getProductCount = async (product_id) => {
    if (product_id) {
      const url = this.baseUrl + `/products/${product_id}/variants/count.json`;
      const resp = await fetch(url);
      const body = await resp.json();
      return body;
    }
    return null;
  }

  // Recieve a single Product Variant
  getProduct = async (variant_id) => {
    if (variant_id) {
      const url = this.baseUrl + `/variants/${variant_id}.json`;
      const resp = await fetch(url);
      const body = await resp.json();
      return body;
    }
    return null;
  }

  // Create a new Product Variant
  addProduct = async (product_id) => {
    const url = this.baseUrl + `/products/${product_id}/variants.json`;
    const resp = await fetch(url, {
      method: 'POST',
      body: {
        "variant": {
          "option1": "Yellow",
          "price": "1.00"
        }
      }
    })
  }
}