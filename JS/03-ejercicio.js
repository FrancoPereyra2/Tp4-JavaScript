class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    mostrar(){
        document.write(`<p> El rectangulo tiene un alto de ${this.alto} y un ancho de ${this.ancho} </p>`);
    }
    modificar(){
        let nuevoAlto = prompt("Ingrese el alto del rectangulo");
        let nuevoAncho = prompt("Ingrese el ancho del rectangulo");
        this.alto = nuevoAlto;
        this.ancho = nuevoAncho;
    }
    calcularPerimetro(){
        return 2*(this.alto + this.ancho);
    }
    calcularArea(){
        return this.alto * this.ancho;
    }
}
 let rectangulo = new Rectangulo(10,5);

rectangulo.mostrar();
rectangulo.modificar();
rectangulo.mostrar();

let perimetro = rectangulo.calcularPerimetro();
let area = rectangulo.calcularArea();

document.write(`<p> El perímetro del rectángulo es de ${perimetro} y el área es de ${area} </p>`);