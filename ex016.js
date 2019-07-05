// Funções / Par ou Ímpar

function parImpar(num) {
	if (num%2 == 0) {
		return `${num} é par!`
	} else {
		return `${num} é ímpar!`
	}
}

console.log(parImpar(5))
console.log()
//-----------------------// / Soma

function soma(n1=0, n2=0) {
	return n1 + n2
}

console.log(`A soma é ${soma(2, 4)}`)
console.log()
//-----------------------// / Fatorial

function fatorial(n) {
	let fat = 1
	for(cont = n; cont > 1; cont--) {
		fat *= cont // fat = fat * cont
	}
	return fat
}

console.log(`Fatorial: ${fatorial(4)}`)
console.log()

// Função recursiva
function fatori(n) {
	if (n == 1) {
		return 1
	} else {
		return n * fatori(n-1)
	}
}

console.log(`Fatorial: ${fatori(4)}`)