/* Criando funções 
function soma(n1, n2){
	
	return n1 + n2;
}

function validaIdade(idade){
	var validar;
	if (idade>=18){
		validar=true;
	}else{
		validar=false;
	}
	return validar;
}
var idade= prompt("Qual a sua idade?");
console.log(validaIdade(idade));

console.log("Resultado da soma: "+soma(2,2));

*/
/* Criando funções para chamar na página

function botao(){
	//alert("Obrigada por clicar");
	document.getElementById("grata").innerHTML ="Obrigada por clicar";
}
function Redirecionar(){
	window.open("https://www.uol.com.br/");
}
function trocar(elemento){
	//document.getElementById("moverMouse").innerHTML ="Obrigada por colaborar";
	elemento.innerHTML= "Obrigada por colaborar";
	//alert("trocar texto");
}

function voltar(elemento){
	//document.getElementById("moverMouse").innerHTML ="Passe o mouse";
	elemento.innerHTML="Passe o mouse";
	//alert("trocar texto");
}
function abrir(){
	alert("Seja bem vindo!");
}
function mudar(elemento){
	console.log("Valor selecionado: " +elemento.value);
}
*/
	
/*var nome="Zé";
var idade=16;
var idade2=18;
var frase ="Flamengo é o melhor time do mundo!";

//alert('Bem vindo:'+ nome);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "SP"));
alert(frase.toUpperCase());*/

var lista=["banana","maçã","Laranja"];
lista.push("uva");
lista.pop();
lista.push("uva");
console.log(lista);

//alert(lista[1]);
/*
console.log("Tamanho da lista: "+ lista.length);
//mostra a lista iniciando pelo último elemento
console.log(lista.reverse());
// transforma o array em string
console.log(lista.toString());
//mostra primeiro elemento da lista
console.log(lista[0]);
//mostra primeiro elemento da string
console.log(lista.toString()[0]);
// permite alterar o separador da lista
console.log(lista.join("-"));*/

/*
// criando um dicionário
var fruta ={nome:"maçã", cor:"Vermelha"};
//exibindo o dicionário
console.log(fruta);

//Exibindo um elemento do dicionário
console.log(fruta.nome);

// lista de dicionários
frutas =[{nome:"maçã", cor:"Vermelha"}, {nome:"Laranja", cor:"amarela"}];

// mostrando um item da lista de dicionários
console.log(frutas[1].cor);
*/

/* condicionais 
var idade =prompt("Qual a sua idade");
if (idade>=18){
	alert("Maior de idade");
}else{
	alert("menor de idade");
};
*/

/*Estrutura de repetição 

var count=5;
while(count>=1){
	console.log(count);
	count-=1;
};

var cont=0;
for(cont=0; cont<=5; cont++){
		console.log("Valor do contador: "+cont);
};
*/

/* Funções de Data e hora 
var d =new Date();
alert (d);
alert ("Mês: "+ d.getMonth());
alert ("Dia: "+ d.getDay());
alert ("Ano: "+ d.getYear());


alert ("Hora: "+ d.getHours());
alert ("Minutos: "+ d.getMinutes());
alert ("Segundos: "+ d.getSeconds());

*/




/*
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let X = A+B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + X);


	*/
	
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);

















