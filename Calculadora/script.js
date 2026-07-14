let conta = "";

function somar(valor) {
    conta += valor;
    document.getElementById("tela").value = conta;
}

function limpar() {
    conta = "";
    document.getElementById("tela").value = "";
}

function calcular() {
    let resultado = eval(conta);

    document.getElementById("tela").value = resultado;

    conta = resultado.toString();
}