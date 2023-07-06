const request = require('supertest');
const app = require('../app');

describe('Product API', () => {
  let productId, productName, productBrand, productDescription, productPrice;

  it('should connect this api', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Connected with API');
  });

  it('should create a new product', async () => {
    const response = await request(app).post('/products').send({
      name: 'Aqua',
      brand: 'Danone',
      description: 'Air mineral kemasan botol 600ml',
      price: 5000,
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('Product successfully registered');

    expect(response.body.product).toHaveProperty('_id');
    expect(response.body.product).toHaveProperty('name');
    expect(response.body.product).toHaveProperty('brand');
    expect(response.body.product).toHaveProperty('description');
    expect(response.body.product).toHaveProperty('price');

    productId = response.body.product._id;
    productName = response.body.product.name;
    productBrand = response.body.product.brand;
    productDescription = response.body.product.description;
    productPrice = response.body.product.price;
  });

  it('should get all products', async () => {
    const response = await request(app).get('/products');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Products successfully obtained');
    expect(response.body.products.length).toBeGreaterThanOrEqual(1);
  });

  it('should get a product by ID', async () => {
    const response = await request(app).get(`/products/${productId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Product successfully obtained');

    expect(response.body.product._id).toBe(productId);
    expect(response.body.product.name).toBe(productName);
    expect(response.body.product.brand).toBe(productBrand);
    expect(response.body.product.description).toBe(productDescription);
    expect(response.body.product.price).toBe(productPrice);
  });

  it('should update a product', async () => {
    const response = await request(app).put(`/products/${productId}`).send({
      name: 'Aqua',
      brand: 'Danone',
      description: 'Air mineral kemasan botol 1.5L',
      price: 8000,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.updatedProduct._id).toBe(productId);
    expect(response.body.updatedProduct.name).toBe('Aqua');
    expect(response.body.updatedProduct.brand).toBe('Danone');
    expect(response.body.updatedProduct.description).toBe('Air mineral kemasan botol 1.5L');
    expect(response.body.updatedProduct.price).toBe(8000);
  });

  it('should delete a product', async () => {
    const response = await request(app).delete(`/products/${productId}`);

    expect(response.statusCode).toBe(204);
  });
});
