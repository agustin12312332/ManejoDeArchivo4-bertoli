import {promises as fs} from 'fs'


export class ProductManager {          //genero mi class 

    constructor (path) { 
        this.path = path;
    }




 //añadir nuevo producto
    async addProduct (newProduct) {          
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if (newProduct.code && newProduct.id && newProduct.title && newProduct.description && newProduct.price && newProduct.thumbnail && newProduct.code && newProduct.stock ){
            const indice = prods.findIndex(prod => prod.code === newProduct.code)
            
            if(indice ===  -1){
                prods.push(newProduct)
                await fs.writeFile(this.path, JSON.stringify(prods))
                console.log( 'Producto creado exitosamente')
            } else {
                console.log( 'este producto ya exitste ')
            }
        } else{
            console.log( 'debe ingresar un producto con todas las caracteristicas')
        }


        
    }    

    // consultar todos los productos
async getProducts() {                           
    const prods = JSON.parse (await fs.readFile(this.path, 'utf-8'))
    console.log( prods)
}


// consultar todos los productos segun id

async getProductsById(id) {
    const prods = JSON.parse (await fs.readFile(this.path, 'utf-8'))
    const prod = prods.find(prodcut => prodcut.id === id)
        if(prod)
            console.log( prod)
        else 
            console.log( 'producto no exitste ')
            
        }
        

        //actualizar producto

        async updateProduct (id, nuevoProdcto) {
            const prods = JSON.parse (await fs.readFile(this.path, 'utf-8'))
            const indice = prods.findIndex(prod => prod.id === id)
            if (indice !== -1){

                prods [indice].stock = nuevoProdcto.stock
                prods [indice].price = nuevoProdcto.price
                prods [indice].title = nuevoProdcto.title
                prods [indice].thumbnail = nuevoProdcto.thumbnail
                prods [indice].code = nuevoProdcto.code
                prods [indice].description = nuevoProdcto.description
                await fs.writeFile(this.path, JSON.stringify(prods))
                console.log( 'Producto actualizado exitosamente')
            } else {
                console.log( 'datos del producto erroneos ')
            }
        } 

        // eliminar producto

        async deleteProducts(id) {
            const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'));
            const prodsFiltrados = prods.filter(prod => prod.id !== id);
            await fs.writeFile(this.path, JSON.stringify(prodsFiltrados));
            console.log('Producto eliminado exitosamente');
        }
    }

















