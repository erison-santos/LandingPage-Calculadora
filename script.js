function insert (num) {
    var numero = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = numero + num;
}

function back () {
    var resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function clean () {
    document.querySelector('#resultado').innerHTML = "";
}

function calcular () {
    var resultado = document.querySelector('#resultado').innerHTML;
    
    if (resultado) {
        document.querySelector('#resultado').innerHTML = eval(resultado);        
    }
    /* if (resultado && resultado.length < 16) {} */
    else {
        document.querySelector('#resultado').innerHTML = "Exedido ou em branco";
    }
}