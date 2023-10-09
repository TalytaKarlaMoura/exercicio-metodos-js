/* 1. filter: Verifica cada elemento do array à condição passada na função e retorna 
os elementos que atendem a essa condição, cria um novo array(cópia superficial). */

const numbers = [1, 2, 5, 10, 22, 18, 77, 100, 920, 1235];
const result = numbers.filter((value) => value % 2 === 0);
console.log(result);

const numb = [-1, 2, -3, 4, 5];
const resul = numb.filter((value) => {
	if (value > 0) {
		console.log('positivo') 
	 } else {
		console.log('negativo')
	 }
});
console.log(resul);

const Lista = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];
const newLista = Lista.filter((value) => value.credit > 500);
console.log(newLista)

/* 2. indexOf: O método retorna o índice do elemento fornecido; 
caso não for encontrado retorna -1. */

const nome = ['João', 'Maria', 'Carlos', 'José'];

const resulta = nome.indexOf('Maria');
console.log(resulta);
const res = nome.indexOf('margarida');
console.log(res);

/* 3. find: Retorna o primeiro elemento que satisfaz a função fornecida. 
Se nenhum valor satisfizer a função de teste, retornará undefined. */

const arr = [2, 4, 6, 7, 8, 9];

const Narr = arr.find((value) => value % 2 != 0);
console.log(Narr);
const Nume = arr.find((value) => value > 10);
console.log(Nume);