// document.getElementById("click-me").onclick = function () {
//     alert("voce clicou no botão");
// };

// document.getElementById("hover-me").onmouseover = function () {
//     alert("voce passou com o mouse no botão");
// };

// document.getElementById("leave-me").onmouseout = function () {
//     alert("voce saiu com o mouse no botão");
// };

// document.onkeydown = function () {
//     alert("voce apertou alguma tecla");
// };
// document.onkeydown = function () {
// alert('Você apertou a tecla: ' + event.keyCode);
// }

// document.getElementById("botao_cor").onclick = function () {
//     document.getElementById("botao_cor").style.height = "100px";
// };

/* document.getElementById("botao_cor").onclick = function () {
    document.getElementById("botao_cor").style['background-color'] = "red";
    document.getElementById("botao_cor").style.transform = "translateX(100px)";
};

document.getElementById("botao_cor").onclick = function () {
    this.style['background-color'] = "red";
    this.style.transform = "translateX(100px)";
};

var botao = document.getElementById("botao_cor");

botao.onclick = function () {
    this.style['background-color'] = "red";
    this.style.transform = "translateX(100px)";
}; */
// var elementos = document.getElementsByClassName("exemplo");

// elementos[0].innerHTML = "Texto do elemento 1";

// console.log(elementos);

// var paragrafos = document.getElementsByTagName("p");
// console.log(paragrafos);

// O console retornará um array: [ {...}, {...}, {...} ]
// Cada um destes objetos é um dos elementos do tipo <p>.

/* for (var a = 0; a < 5 ; a++) {
    console.log(a);
}

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

    for (var a = 0; a < alunos.length ; a++) {
        console.log(alunos[a]);
    }
 */
    /* O console mostrará:

    Pedro
    Maria
    José
    João
    Carlos

    */
                
    /* var carro = {
        'Ano': 2018,
        'Modelo': 'Fox',
        'Cilindradas': '1.8',
        'Combustível': 'Gasolina'

    }

    for (var prop in carro) {
        console.log( prop + ': ' + carro[prop] );
    } */
    
    /* O console mostrará:

    Ano: 2018
    Modelo: Fox
    Cilindradas: 1.8
    Combustível: Gasolina
    
    */
   /* var elementos = document.getElementsByClassName("exemplo");
   
   for (var c =0; c < elementos.length; c++) {
    elementos[c].style.color = "bold";
    elementos[c].style['font-weight'] = "bold";
   }

   var elementos = document.getElementsByTagName("p");
   
   for (var c =0; c < elementos.length; c++) {
    elementos[c].style.color = "bold";
    elementos[c].style['font-weight'] = "bold";
   }
 */
/* 
   var contas = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

function printEXAccounts() {
   for (var i = 0; i < contas.length; i++) {
    if (contas[i].startsWith("EX")) {
        console.log(contas[i]);
        }
    }
} */
/* 
    var count = 0;

    while (count < 5) {
        console.log(count);
        count++;
    }

    /* O console mostrará:

    0
    1
    2
    3
    4

    */
/*
    var count = 10;
    
        do {
            console.log(count);
            count++;
        } while (count < 5); // O loop do/while precisa de ponto e vírgula depois da condição
    
        // O console mostrará: 10
     */
    /* 
        var idade = 17;

        if (idade < 18) {
    
            console.log('Menor de idade');
    
        } else {
    
            console.log('Maior de idade');
    
        }
     */
        // O console mostrará: 'Menor de idade'
                        

/*         var idade = 18;

        if (idade < 18) {
    
            console.log('Menor de 18');
    
        } else if (idade == 18) {
    
            console.log('Tem 18 anos');
    
        } else {
    
            console.log('Maior de 18');
    
        }
 */    
        // O console mostrará: 'Tem 18 anos'                   

    /* nota = 7;
    faltas = 3;
 */
    // Resolução com and: 

   /*  if (nota >= 7 && faltas <= 4) {
        console.log( 'O aluno foi aprovado' );
    } else {
        console.log( 'O aluno foi reprovado' );
    } */

    // Resolução com or: 

/*     if (nota < 7 || faltas > 4) {
        console.log( 'O aluno foi reprovado' );
    } else {
        console.log( 'O aluno foi aprovado' );
    }
 */
    // as duas maneiras de resolver chegam ao mesmo resultado. O console mostrará: "O aluno foi aprovado".

    // mude os valores das variáveis nota e faltas e veja como o teste funciona.
/* 
var socio = false;
var idade = 25;

if (socio == true || idade == 65) {
    console.log("ingresso gratis");
} else {
    if (idade > 18){
        console.log("preço 6,00");
    } else {
        console.log("preço 12,00");
    }
} */
        
/*     var funcionarios = [
        
        {
            'nome': 'Carlos Henrique da Silva',
            'idade': 45,
            'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
            
        },

        {
            'nome': 'Maria Helena Pereira',
            'idade': 32,
            'filhos': ['João Pedro Pereira de Souza']
            
        },

        {
            'nome': 'José Feliciano Maia',
            'idade': 39,
            'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
            
        }
    
    ];
        
    var list_element = document.getElementById("filhos");

    for (var a = 0 ; a < funcionarios.length ; a++) {
        if (funcionarios[a].filhos) {
            
            var lista_filhos = funcionarios[a].filhos;
            
            for (var b = 0 ; b < lista_filhos.length ; b++) {
                list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';

            }
        }
    } */
    

    