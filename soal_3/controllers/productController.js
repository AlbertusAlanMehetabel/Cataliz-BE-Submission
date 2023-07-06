const ProductService = require('../services/productService');

class ProductController {
  constructor() {
    // Membuat instance dari ProductService di dalam constructor
    this.productService = new ProductService();
  }

  // Mengambil semua produk
  async getAllProducts(req, res) {
    try {
      const products = await this.productService.getAllProducts();
      res.status(200).json({ message: 'Products successfully obtained', products: products });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

  // Mengambil produk berdasarkan ID
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await this.productService.getProductById(id);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json({ message: 'Product successfully obtained', product: product });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

  // Mendaftarkan produk
  async createProduct(req, res) {
    try {
      const productData = req.body;
      const product = await this.productService.createProduct(productData);
      res.status(201).json({ message: 'Product successfully registered', product: product });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

  // Memperbarui produk
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const productData = req.body;

      const product = await this.productService.getProductById(id);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      const updatedProduct = await this.productService.updateProduct(id, productData);

      res.status(200).json({ message: 'Product updated successfully', updatedProduct: updatedProduct });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

  // Menghapus produk
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await this.productService.getProductById(id);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      await this.productService.deleteProduct(id);

      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }
}

module.exports = ProductController;
