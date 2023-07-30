class Product {
  constructor(title, description, price, thumbnail, code, stock,) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const searchedProduct = this.products.find((prod) => prod.id === id);

    if (!searchedProduct) {
      console.error("Producto no encontrado");
    } else return searchedProduct;
  }

  addProduct(product) {
    const codeInUse = this.products.find((prod) => prod.code === product.code);

    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      product.stock < 0
    ) {
      console.log("Faltan campos obligatorios");
      return;
    }

    if (codeInUse) {
      console.log("Producto existente");
      return;
    }

    product.id = this.productIdCounter++;
    this.products.push(product);
  }
}

const product1 = new Product(
  "prod1",
  "este es el prod1",
  200,
  "img.jpg",
  "222",
  16
);
const product2 = new Product(
  "prod2",
  "este es el prod2",
  300,
  "img.jpg",
  "333",
  30
);

const productManager = new ProductManager();

productManager.addProduct(product1);
productManager.addProduct(product2);

console.log(
  productManager.getProducts()
); /* devuelve los dos products, product1 y product2 */

console.log(productManager.getProductById(1))
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(3)) /* devuelve producto no encontrado */
