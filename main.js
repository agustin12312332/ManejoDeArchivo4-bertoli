

import { ProductManager } from "./ProductManager.js";
import { Product } from "./Product.js";


const producto1 = new Product("Discos", "antiguo", 1200, 12, "a123");
const producto2 = new Product("Libros", "clásico", 800, 10, "b456");
const producto3 = new Product("Pinturas", "moderno", 2000, 5, "c789" );
const producto4 = new Product("Electrónicos", "tecnológico", 2500, 8, "d012");

const producto2version2 = new ProductManager ('./product.js')

// Ruta correcta para el archivo JSON dentro de la carpeta src
const productManager = new ProductManager('./products.json');

// productManager.addProduct(producto4);
// productManager.getProducts
// productManager.getProductsById('ce0fac51fb7´+ñ38b65938b');
// productManager.updateProduct('f33f588aaba9efccc523',producto2version2)
productManager.deleteProducts('f33f588aaba9efccc523')

