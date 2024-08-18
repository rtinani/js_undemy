
//soltar a mensagem na caixa de dialogo

 
// alert('Mensagem enviada pelo alert');

// console.log('Mensagem enviada pelo console');

/* var nome ="Rodrigo";
var sobrenome ="Tinani";
var cpf = "111.111.111.11";
var ddd = "11";



console.log('Primeira letra do nome: ' + nome [0]);  */

/* var ano_nascimento = 1986;
var preco = 16.99;  // floats devem ser usadas com ponto, nunca com vírgula.
var temperatura = -5;
var numero_grande = 2.2e45; /* números muito grandes podem ser representados em Javascript pela notação exponencial. 
Neste exemplo, este número significa 2.2 x 1045 */ 

/* var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;
// console.log('A media é: ' + media);

// console.log(Math.pow(num1,4));

var increment = 20;
    increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
    console.log(increment); // O console mostrará 25

    // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

    increment = 1;
    increment += 5;
    console.log(increment); // O console mostrará 6
 */
    // podemos também usar *=, /=
/* 
    var conteudo_caixas = document.getElementById("caixa_azul").innerHTML;
    
    console.log(conteudo_caixas); 
    
    document.getElementById("caixa_amarela").innerHTML= coneudo_caixa;
    
     document.getElementById("caixa_amarela").innerHTML = '<h1>' + caixa amarela + '</h1>';
    
    */
/* 
   function soma_numeros(){
      var x = 5;
      var y = 2;
      var soma = x + y;
      console.log(soma);
   }

   soma_numeros(); */

   /* function soma_args(num1,num2){
      var soma = num1 + num2;
      console.log(soma);
   }

   soma_args(10,25);

   soma_args(1000,125);
   
   var n1 = 50;
   var n2 = 30;

   soma_args(n1,n2);
 */

/*    function soma_args(num1,num2){
      var soma = num1 + num2;
      return soma;
   }
   console.log( soma_args(10,25));
 */

/*    function soma_args(num1,num2){
      var soma = num1 + num2;
      return soma;
   }
   console.log("Resultado da soma: " + soma_args(10,25));
 */
/* 
   function soma_args(num1,num2){
      var soma = num1 + num2;
      return soma;
   }
   var soma_f = soma_args(10,25);
   console.log(soma_f);
 */

//    function valor_imc(peso,altura){
//       var imc = peso / (altura * altura);
//         return imc;
//    }

//    var meu_peso = document.getElementById("peso").innerHTML;
//    var minha_altura = document.getElementById("altura").innerHTML;

//   var meu_imc = valor_imc(meu_peso,minha_altura);

//    document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

/* exercicio função

function KMtoMiles(km) {
   // escreva seu código abaixo desta linha
   var milhas = km * 0.621;
   return milhas;
   }
   console.log(milhas_arg(100)); */

/*    var cursos = [
      {
          'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
          'avaliacoes': 680,
          'alunos': 2300,
          'categorias': ['programacao', 'tecnologia']
      },

      {
          'titulo': 'Aprenda PHP e faça sites dinâmicos',
          'avaliacoes': 180,
          'alunos': 350,
          'categorias': ['desenvolvimento web', 'programacao']
      },

      {
          'titulo': 'Excel do Zero ao Avançado',
          'avaliacoes': 420,
          'alunos': 1800,
          'categorias': ['produtividade', 'gestão']
      }
      
  ];
         console.log( cursos[1]['categorias'][0] );
        
         cursos[2]['categorias'][1] = "Administração de empresas";
         console.log(cursos[2]['categorias']);
 */
/*          var aluno = {
            'nome': 'Maria',
            'sobrenome': 'Pereira',
            'ano_nasc' : 1992,
            'nome_completo': function() {
               var nomeCompleto = this.nome + ' ' + this.sobrenome;
               return nomeCompleto;
          },

            'ver_idade': function () {
               var idade = 2018 - this.ano_nasc;
               return idade;
            }
      };
        console.log(aluno.ver_idade());
        //console.log(aluno.nome_completo()); */
