function load() {
	var corpo = window.document.body
	var msg = window.document.getElementById('msg')
	var imagem = window.document.getElementById('image')
	var data = new Date()
	var hora = data.getHours()
	msg.innerHTML = `<p>Agora são ${hora} horas!</p>`

	if (hora >= 0 && hora < 12) {
		// BOM DIA
		msg.innerHTML += "BOM DIA!"
		imagem.src = "images/manhãf.png"
		corpo.style.background = "rgb(255, 128, 87)"
	} else if (hora >= 12 && hora < 18) {
		// BOA TARDE
		msg.innerHTML += "BOA TARDE!"
		imagem.src = "images/tardef.png"
		corpo.style.background = "rgb(215, 163, 88)"
	} else {
		// BOA NOITE
		msg.innerHTML += "BOA NOITE!"
		imagem.src = "images/noitef.png"
		corpo.style.background = "rgb(21, 27, 37)"
	}
}
