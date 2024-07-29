class Cajero {
    constructor(titular, saldo, ingresar, extraer, informar){
        this.titular = "Alex";
        this.saldo = 0;
        this.ingresar = 0;
        this.extraer = 0;
        this.informar = 0;
    }
    ingresar(cantidad){
        if(cantidad > 0){
            this.saldo += cantidad;
            document.write(`<p> El saldo actual es de ${this.saldo} </p>`);
        }else{
            document.write(`<p> La cantidad a ingresar debe ser positiva </p>`);
        }
    }
}
