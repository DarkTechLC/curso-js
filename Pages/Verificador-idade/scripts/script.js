function verificar() {
	var anoAtual = new Date().getFullYear()
	var anoUser = document.getElementById('txtano').value
	var res = document.querySelector('div#res')

	if (anoUser.length == 0 || Number(anoUser) > anoAtual) {
		alert("ERRO! Preencha os dados corretamente!")
	} else {
		radsex = document.getElementsByName('radsex')
		var idade = anoAtual - anoUser // Calcular idade
		var genero = ''
		var img = document.createElement('img') // Criar tag da imagem
		img.setAttribute('id', 'img') // Definir id da imagem
		if (radsex[0].checked) {
			genero = 'Homem'
			if (idade >= 0 && idade <= 10) {
				// CRIANÇA
				img.setAttribute('src', 'images/child-boy.png')
			} else if (idade < 21) {
				// JOVEM
				img.setAttribute('src', 'images/young-boy.png')
			} else if (idade < 55) {
				// ADULTO
				img.setAttribute('src', 'images/adult-boy.png')
			} else {
				// IDOSO
				img.setAttribute('src', 'images/old-boy.png')
			}
		} else {
			genero = 'Mulher'
			if (idade >= 0 && idade <= 10) {
				// CRIANÇA
				img.setAttribute('src', 'images/child-girl.png')
			} else if (idade < 21) {
				// JOVEM
				img.setAttribute('src', 'images/young-girl.png')
			} else if (idade < 55) {
				// ADULTO
				img.setAttribute('src', 'images/adult-girl.png')
			} else {
				// IDOSO
				img.setAttribute('src', 'images/old-girl.png')
			}
		}
		res.style.textAlign = 'center'
		res.innerHTML = `<p>${genero} com ${idade} anos.</p>`
		res.appendChild(img) // Adicionar tag <img> a <div>
	}
}

botao.addEventListener('click', verificar)