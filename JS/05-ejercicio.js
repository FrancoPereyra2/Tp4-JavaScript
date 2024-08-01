class Persona{
    constructor(nombre, edad, DNI, sexo, peso, altura, anionacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anionacimiento = anionacimiento;
    }

    mostrarGeneracion(){
        let generacion = "";
        let rasgo = "";
        if(this.anionacimiento >= 1994 && this.anionacimiento <= 2010){
            generacion = 'Generacion Z'
            rasgo = 'Irreverencia'
        }else if(this.anionacimiento >= 1981 && this.anionacimiento <= 1993){
            generacion = 'Generacion Y'
            rasgo = 'Frustración'
        }else if(this.anionacimiento >= 1969 && this.anionacimiento <= 1980){
            generacion = 'Generacion X'
            rasgo = 'Obsesion por el Exito'
        }else if(this.anionacimiento >= 1949 && this.anionacimiento <= 1968){
            generacion = 'Baby Boom'
            rasgo = 'Ambicion'
        }else if(this.anionacimiento >= 1930 && this.anionacimiento <= 1948){
            generacion = 'Generacion Silent'
            rasgo = 'Austeridad'
        }
        document.write(`<p>Pertenceses a la generacion ${generacion} y tu rasgo caracteristico es rasgo ${rasgo}</p>`)
    }

    mayorDeEdad(){
        if(this.edad >= 18){
            document.write("<p>Es mayor de edad</p>");
        }else{
            document.write("<p>Es menor de edad</p>");
        }
    }
    generarDni(){
        this.generarDni = Math.floor(Math.random()* 10000000)
        document.write(`<p>Tu DNI es: ${this.generarDni}</p>`)
    }
    mostrarDatos(){
        document.write('<ul>')
        document.write(`<li>Nombre: ${this.nombre}</li>`)
        document.write(`<li>Edad: ${this.edad}</li>`)
        document.write(`<li>DNI: ${this.DNI}</li>`)
        document.write(`<li>Sexo: ${this.sexo}</li>`)
        document.write(`<li>Peso: ${this.peso}</li>`)
        document.write(`<li>Altura: ${this.altura}</li>`)
        document.write(`<li>Año de Nacimiento: ${this.anionacimiento}</li>`)
    }
}

let persona = new Persona('Alex', 18, 12345678, 'masculino', 80, 1.75, 1994);
persona.mostrarDatos();
persona.mayorDeEdad();
persona.mostrarGeneracion();
persona.generarDni();