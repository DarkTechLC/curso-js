function gerar() {
	tnum = document.getElementById('tnum')
	result = document.getElementById('result')

	if (tnum.value.length == 0) {
		result.innerHTML = "A caixa não pode ficar vazia!"
	} else {
		result.innerHTML = ''
		num = Number(tnum.value)
		for(tab = 1; tab <= 10; tab++) {
			res = num * tab
			result.innerHTML += `<p>${num} x ${tab} = <code>${res}</code></p>`
		}
	}
}

botao.addEventListener('click', gerar)