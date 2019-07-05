// Variáveis compostas (Arrays)

let num = [2, 4, 3]
console.log(num)
console.log(num[0])

console.log()
num.push(1)
num.sort()
console.log(num)
console.log(num[0])

console.log()
for(let i = 0; i < num.length; i++) {
	console.log(`A posição ${i} tem o valor ${num[i]}.`)
}

// Repetições em arrays
console.log()
for(let i in num) {
	console.log(`A posição ${i} tem o valor ${num[i]}.`)
}

console.log()
var pos = num.indexOf(2)
console.log(`O valor ${num[pos]} está na posição ${pos}.`)