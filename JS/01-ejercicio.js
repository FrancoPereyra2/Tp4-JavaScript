const auto = {
    marca: "volkswagen",
    color: "rojo",
    modelo: "Golf",
    encendido: function(){
        document.write(`<p> El auto esta encendiendo </p>`)
    },
    apagado: function(){
        document.write(`<p> El auto se apago </p>`)
    }
}

auto.encendido()
auto.apagado()