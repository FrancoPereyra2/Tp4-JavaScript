class Libro{
    constructor(ISBN, titulo, autor, numeroPagina){
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPagina = numeroPagina;
    }
    get ISBN(){
        return this._ISBN;
    }
    get titulo(){
        return this._titulo;
    }
    get autor (){
        return this._autor;
    }
    get numeroPagina(){
        return this._numeroPagina;
    }
    set ISBN(nuevoISBN){
        if(nuevoISBN.length > 0){
            this._ISBN = nuevoISBN;
        }
    }
    set titulo(nuevoTitulo){
        if(nuevoTitulo.length > 0){
            this._titulo = nuevoTitulo;
        }
    }
    set autor(nuevoAutor){
        if(nuevoAutor.length > 0){
            this._autor = nuevoAutor;
        }
    }
    set numeroPagina(nuevoNumeroPagina){
        if(nuevoNumeroPagina > 0){
            this._numeroPagina = nuevoNumeroPagina;
        }
    }   
    cantidadPaginas(){
        if(libro1.numeroPagina > libro2.numeroPagina){
            document.write(`El libro con mas paginas es ${libro1.titulo} con ${libro1.numeroPagina} paginas`)
        }else if(libro1.numeroPagina < libro2.numeroPagina){
            document.write(`El libro con mas paginas es ${libro2.titulo} con ${libro2.numeroPagina} paginas`)
        }else{
            document.write(`Los libros tienen la misma cantidad de paginas`)
        }
    }
    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.ISBN} creado por por el autor ${this.autor} tiene ${this.numeroPagina} paginas</p>`)
    }
}

let libro1 = new Libro(123456789, 'Harry Potter', 'J.K. Rowling', 400);
let libro2 = new Libro(12342259, 'El Quijote', 'Miguel de Cervantes', 500);

libro1.mostrarLibro()
libro2.mostrarLibro()

if(libro1.numeroPagina > libro2.numeroPagina){
    document.write(`El libro con mas paginas es ${libro1.titulo} con ${libro1.numeroPagina} paginas`)
}else if(libro1.numeroPagina < libro2.numeroPagina){
    document.write(`El libro con mas paginas es ${libro2.titulo} con ${libro2.numeroPagina} paginas`)
}else{
    document.write(`Los libros tienen la misma cantidad de paginas`)
}   