class ProductManager {
  constructor() {
    this.products = [];
  }

  addProducts = (title, description, price, thumbnail, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      stock,
    };
    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }
    if (Object.values(product).every((value) => value)) {
      this.products.push(product);
    } else {
      console.log("Todos los campos son requeridos");
    }
  };
  getProducts = () => {
    return this.products;
  };
  getProductsById = (id) => {
    const obj = this.products.find((product) => product.id === id);
    return obj ? obj : console.log("No products found");
  };
}

const aplicacion = new ProductManager();
aplicacion.addProducts(
  "Procesador AMD",
  "Ryzen 5600 4.4 Ghz AM4",
  80000,
  "thumbnail",
  15
);
aplicacion.addProducts(
  "Procesador Intel",
  "I5 12400F Alderlake 4.40Ghz",
  85000,
  "thumbnail",
  10
);
aplicacion.addProducts(
  "Disco Solido",
  "SSD 240gb Kingston",
  8000,
  "thumbnail",
  15
);
aplicacion.addProducts(
  "Disco Solido",
  "SSD 480gb Western Digital Green",
  15000,
  "thumbnail",
  15
);
aplicacion.addProducts(
  "Placa de Video",
  "Powercolor AMD Radeon RX 6700 10Gb",
  180000,
  "thumbnail",
  15
);
aplicacion.addProducts(
  "Placa de Video",
  "Asus Nvidia Geforce RTX 3070 Dual",
  240000,
  "thumbnail",
  15
);
console.log(
  "Muestra solo el producto de id: 1 ",
  aplicacion.getProductsById(1)
);
console.log("Muestra aquellos productos agregados ", aplicacion.getProducts());
