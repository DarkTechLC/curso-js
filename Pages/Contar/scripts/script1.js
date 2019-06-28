function contar() {
	var numStart = document.getElementById('tstart').value
	var numEnd = document.getElementById('tend').value
	var razao = document.getElementById('tpass').value
	var num = Number(numStart)
	var result = document.getElementById('result')
	result.innerHTML = ''

	if (numStart == '' || numEnd == '' || razao == '') {
		result.innerHTML = "Preencha todos os campos!"
	} else if(razao == 0) {
		result.innerHTML = "A razão não pode ser igual a 0."
	} else if(numStart < numEnd/* && razao > 0*/) {
		while(num < Number(numEnd)) {
			result.innerHTML += `${num} ➡ `
			num += razao //num = num + Number(razao)
		}
		result.innerHTML += "✅"
	} else if(numStart > numEnd/* && razao < 0*/) {
		while(num > Number(numEnd)) {
			result.innerHTML += `${num} ➡ `
			num -= razao //num = num - Number(razao)
		}
		result.innerHTML += "✅"
	} else {
		result.innerHTML = "Opção inválida!"
	}
}

botao.addEventListener('click', contar)
// ns + np <= ne

//v = ns + np
//v = v + np

//v =  1 - 1
// v = 0 - 1

//10 - r = n