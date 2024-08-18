/* window.onmousemove = function (e) {
    
    if (e.pageY < 5) {
        alert ('Não');
    }
}; */

/* window.localStorage.setItem("nome", "João");

console.log(localStorage['nome']); */
/* 
window.localStorage.removeItem("nome");

console.log(localStorage['nome']); */

/* document.getElementById("enviar-nome").onclick = function () {
    // guardar o nome digitado em local Storage
    var nome = document.getElementById("nome-usuaio").value;
    localStorage.setItem("nome", nome);

    // esconder o formulario
    document.getElementById("name-field").style.display = "none";

    // atualizar e mostrar mensagem de boas visdas
    document.getElementById("welcome-text").innerHTML = "Olá" + localStorage.nome + "Tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é" + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "initial";

};

if(localStorage.nome) {
    //esconder o formulario
    document.getElementById("name-field").style.display = "none";

    // atualizar e mostrar mensagem de boas visdas
    document.getElementById("welcome-text").innerHTML = "Olá" + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é" + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "initial";
}

document.getElementById("not-me").onclick = function () {
    //remover chave nome do local storange
    localStorage.removeItem("nome");

    // esconder mensagem de boas vindas
    document.getElementById("welcome-area").style.display = "none";

    // mostrar o formulario
    document.getElementById("name-field").style.display = "initial";

}
 */
 // Criação de um objeto do tipo Date
/*  var data = new Date();

 console.log(data);
 */

/*  var data_hoje = new Date();

 console.log( data_hoje.getDate() );

 var data_nascimento = "1980-03-01";

 var ano_nascimento = new Date("1980-03-01").getFullYear();
 var ano_atual = new Date().getFullYear();
 var idade = ano_atual - ano_nascimento;
 console.log(idade); */

/* var envio = new Date ("2018-03-20");
envio = envio.getTime();

var entrega = new Date ("2018-04-06");
entrega = entrega.getTime();

var dias = (entrega - envio) / 86400000;
document.getElementById("dias_entrega").innerHTML = dias; 
 */

/* var hora = new Date;
hora = hora.getHours();

var minuto = new Date;
minuto = minuto.getMinutes()

document.getElementById("horas").innerHTML = hora;
document.getElementById("minutos").innerHTML = minuto; */


/* console.log('Mensagem 1');

window.setTimeout(function () {
    console.log('Mensagem 2');

},3000) */

/* document.getElementById("mostrar-loader").onclick = function () {

    document.getElementById("spinner-loader").style.display = "initial";
    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";
    }, 5000);

};
 */

/* var count = 0;
    window.setInterval(function(){
        console.log(count);
        count++;
    }, 1000); */
    

  /*   var count = 0;

    var inter = window.setInterval(function(){
        console.log(count);
        count++;
        if (count > 10) {
            window.clearInterval(inter);
        }
    }, 1000); */


    // relogio

/*     window.setInterval(function(){
        
    
    var hora_atual = new Date();

    var horas = hora_atual.getHours();
    var minutos = hora_atual.getMinutes();
    var segundos = hora_atual.getSeconds();

    function format_time(time) {
        if (time >= 0 && time <=9){
            var formatted_time = time.toString();
            formatted_time = "0" + formatted_time;
        } else {
            var formatted_time = time.toString();
        }
        return formatted_time;
    }

    document.getElementById("relogio").innerHTML = horas.toString() + ":" + minutos.toString() + ":" + segundos.toString();

},1000); */



var categoria = '2';

    switch (categoria) {

        case '1':
            console.log("Valor a pagar: R$ 11,22");
            break;

        case '2':
            console.log("Valor a pagar: R$ 22,45");
            break;

        case '3':
            console.log("Valor a pagar: R$ 16,88");
            break;

        case '4':
            console.log("Valor a pagar: R$ 33,65");
            break;
        
        default: 
            console.log("Categoria não encontrada");

    }

    var categoria_veiculo = "3";

    console.log(valor_pedagio (categoria_veiculo));

    categoria_veiculo = "2";

    console.log(valor_pedagio (categoria_veiculo));

    categoria_veiculo = "5";

    console.log(valor_pedagio (categoria_veiculo));
    







































