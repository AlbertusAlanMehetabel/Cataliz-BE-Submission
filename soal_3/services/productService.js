const ProductRepository = require('../repositories/productRepository');

// Logika bisnis
class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getAllProducts() {
    return await this.productRepository.getAllProducts();
  }

  async getProductById(id) {
    return await this.productRepository.getProductById(id);
  }

  async createProduct(productData) {
    return await this.productRepository.createProduct(productData);
  }

  async updateProduct(id, productData) {
    return await this.productRepository.updateProduct(id, productData);
  }

  async deleteProduct(id) {
    return await this.productRepository.deleteProduct(id);
  }
}

module.exports = ProductService;
