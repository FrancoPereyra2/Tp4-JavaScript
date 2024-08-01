class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        document.write(`<p> Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio} </p>`);
    }

}

let producto1 = new Producto('001', 'Televisor', 500);
let producto2 = new Producto('002', 'Laptop', 1000);
let producto3 = new Producto('003', 'Tablet', 300);

let productos = [producto1,producto2,producto3];

productos[0].imprimeDatos();
productos[1].imprimeDatos();
productos[2].imprimeDatos();
