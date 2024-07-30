// Definir la clase Rectangulo
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    // Método para modificar el alto y el ancho
    modificarDimensiones(nuevoAlto, nuevoAncho) {
        this.alto = nuevoAlto;
        this.ancho = nuevoAncho;
    }

    // Método para mostrar las propiedades
    mostrarPropiedades() {
        console.log(`Alto: ${this.alto}, Ancho: ${this.ancho}`);
    }

    // Método para calcular el perímetro
    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }

    // Método para calcular el área
    calcularArea() {
        return this.alto * this.ancho;
    }
}

// Ejemplo de uso:
let rectangulo1 = new Rectangulo(10, 5); // Crear un rectángulo con alto 10 y ancho 5

rectangulo1.mostrarPropiedades(); // Mostrar el alto y el ancho
console.log(`Perímetro: ${rectangulo1.calcularPerimetro()}`); // Calcular y mostrar el perímetro
console.log(`Área: ${rectangulo1.calcularArea()}`); // Calcular y mostrar el área

rectangulo1.modificarDimensiones(20, 10); // Modificar el alto y el ancho

rectangulo1.mostrarPropiedades(); // Mostrar el nuevo alto y el nuevo ancho
console.log(`Nuevo Perímetro: ${rectangulo1.calcularPerimetro()}`); // Calcular y mostrar el nuevo perímetro
console.log(`Nueva Área: ${rectangulo1.calcularArea()}`); // Calcular y mostrar la nueva área
