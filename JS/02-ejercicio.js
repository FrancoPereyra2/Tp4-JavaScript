class Cajero {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar() {
        let cantidad = parseFloat(prompt('Ingrese una cantidad para ingresar'));
        if (cantidad > 0) {
            this.saldo += cantidad;
            document.write(`<p>El saldo de ${this.titular} es de $${this.saldo}</p>`);
        } else {
            alert('La cantidad a ingresar debe ser positiva');
        }
    }

    extraer() {
        let cantidad = parseFloat(prompt('Ingrese una cantidad para extraer'));
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            document.write(`<p>Se han extraído $${cantidad}. Saldo actual: $${this.saldo}.</p>`);
        } else if (cantidad > this.saldo) {
            alert('No se puede extraer una cantidad mayor al saldo disponible');
        } else {
            alert('La cantidad a extraer debe ser positiva');
        }
    }

    informacion() {
        return `Titular: ${this.titular}, Saldo: $${this.saldo} .`;
    }
}

let cuenta = new Cajero("Alex");

// Mostrar descripción inicial
document.write(`<p>${cuenta.informacion()}</p>`);

// Ingresar dinero
cuenta.ingresar();

// Extraer dinero
cuenta.extraer();

// Mostrar descripción final
document.write(`<p>${cuenta.informacion()}</p>`);
