// funções matemáticas

function calcularBaskara(a, b, c) {
  var delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0) {
    return "Delta negativo, a equação não possui raízes reais.";
  } else {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return "As raízes da equação são: " + x1 + " e " + x2;
  }
}

function calcularEquacaoReta(a, x, b) {
  return "O valor de y é: ";
}

function calcularHipotenusa(a, b) {
  return (
    "O valor da hipotenusa é: " + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
  );
}

function calcularLogaritmo(base, numero) {
  return "O valor do logaritmo é: ";
}

function calcularExponencial(base, expoente) {
  return "O valor da exponencial é: ";
}

function calcularRaizQuadrada(numero) {
  return "O valor da raiz quadrada é: ";
}


// manipuladores de eventos para a página de Baskara
var botaoBaskara = document.getElementById('calcularBaskara');
if (botaoBaskara) {
    botaoBaskara.addEventListener('click', function () {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var c = document.getElementById('c').value;
        var resultado = calcularBaskara(a, b, c);
        document.getElementById('resultadoBaskara').innerText = resultado;
    });
}

// manipuladores de eventos para a página de Equação da Reta
var botaoEquacaoReta = document.getElementById('calcularEquacaoReta');
if (botaoEquacaoReta) {
    botaoEquacaoReta.addEventListener('click', function () {
        var a = document.getElementById('a').value;
        var x = document.getElementById('x').value;
        var b = document.getElementById('b').value;
        var resultado = calcularEquacaoReta(a, x, b);
        document.getElementById('resultadoEquacaoReta').innerText = resultado;
    });
}

// manipuladores de eventos para a página de Hipotenusa
var botaoHipotenusa = document.getElementById('calcularHipotenusa');
if (botaoHipotenusa) {
    botaoHipotenusa.addEventListener('click', function () {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var resultado = calcularHipotenusa(a, b);
        document.getElementById('resultadoHipotenusa').innerText = resultado;
    });
}

// manipuladores de eventos para a página de Logaritmo
var botaoLogaritmo = document.getElementById('calcularLogaritmo');
if (botaoLogaritmo) {
    botaoLogaritmo.addEventListener('click', function () {
        var base = document.getElementById('base').value;
        var numero = document.getElementById('numero').value;
        var resultado = calcularLogaritmo(base, numero);
        document.getElementById('resultadoLogaritmo').innerText = resultado;
    });
}

// manipuladores de eventos para a página de Exponencial
var botaoExponencial = document.getElementById('calcularExponencial');
if (botaoExponencial) {
    botaoExponencial.addEventListener('click', function () {
        var base = document.getElementById('base').value;
        var expoente = document.getElementById('expoente').value;
        var resultado = calcularExponencial(base, expoente);
        document.getElementById('resultadoExponencial').innerText = resultado;
    });
}

// manipuladores de eventos para a página de Raiz Quadrada
var botaoRaizQuadrada = document.getElementById('calcularRaizQuadrada');
if (botaoRaizQuadrada) {
    botaoRaizQuadrada.addEventListener('click', function () {
        var numero = document.getElementById('numero').value;
        var resultado = calcularRaizQuadrada(numero);
        document.getElementById('resultadoRaizQuadrada').innerText = resultado;
    });
}

var botaoLimparBaskara = document.getElementById('limparBaskara');
if (botaoLimparBaskara) {
    botaoLimparBaskara.addEventListener('click', function () {
        document.getElementById('a').value = '';
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
        document.getElementById('resultadoBaskara').innerText = '';
    });
}

