function retas(a1, a2, b1, b2) {
	if(a1 == a2 && b1 == b2) {
		return "Paralelas coincidentes"
	} else if(a1 == a2 && b1 != b2) {
		return "Paralelas distintas"
	} else if(a1 != a2 && a1*a2 == -1) {
		return "Concorrentes perpendiculares"
	} else {
		return "Concorrentes"
	}
}

console.log(`a1=2; a2=2; b1=2; b2=2.\nLogo as retas são: ${retas(2, 2, 2, 2)}\n`)
console.log(`a1=1; a2=1; b1=2; b2=3.\nLogo as retas são: ${retas(1, 1, 2, 3)}\n`)
console.log(`a1=-1; a2=1; b1=3; b2=1.\nLogo as retas são: ${retas(-1, 1, 3, 1)}\n`)
console.log(`a1=3/2; a2=-1/2; b1=1/2; b2=-3/2.\nLogo as retas são: ${retas(3/2, -1/2, 1/2, -3/2)}\n`)
