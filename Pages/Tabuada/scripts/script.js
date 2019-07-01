function gerar() {
	tnum = document.getElementById('tnum')
	seltab = document.getElementById('seltab')
	seltab.style.fontSize = "17pt"

	if (tnum.value.length == 0) {
		alert("A caixa não pode ficar vazia!")
	} else {
		let num = Number(tnum.value)
		let tab = 1
		seltab.innerHTML = ''
		while(tab <= 10) {
			let item = document.createElement('option')
			item.text = `${num} x ${tab} = ${num*tab}`
			seltab.appendChild(item)
			tab++
		}
	}
}

botao.addEventListener('click', gerar)