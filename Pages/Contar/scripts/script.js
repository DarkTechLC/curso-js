function contar() {
	let tNumStart = document.getElementById('tstart')
	let tNumEnd = document.getElementById('tend')
	let tRazao = document.getElementById('tpass')
	let result = document.getElementById('result')

	if (tNumStart.value.length == 0 || tNumEnd.value.length == 0 || tRazao.value.length == 0) {
		result.innerHTML = "Preencha todos os campos!"
	} else {
		result.innerHTML = ''
		let numStart = Number(tNumStart.value)
		let numEnd = Number(tNumEnd.value)
		let razao = Number(tRazao.value)
		if (razao <= 0) {
			alert("Será atribuido o valor 1, caso o passo seja menor ou igual a 0.")
			razao = 1 
		}
		if (numEnd > numStart) {
			for(let cont = numStart; cont <= numEnd; cont += razao) {
				result.innerHTML += `${cont} ➡ `
			}
		} else {
			for(let cont = numStart; cont >= numEnd; cont -= razao) {
				result.innerHTML += `${cont} ➡ `
			}
		}
		result.innerHTML += `✅`
	}
}

botao.addEventListener('click', contar)