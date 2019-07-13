var values = []
var result = document.getElementById('result')

function add() {
    let seltab = document.getElementById('seltab')
    let valueAdd = document.getElementById('tnum').value
    if (valueAdd.length == 0) {
        alert("Preencha o campo!")
    } else if (valueAdd < 1 || valueAdd > 100) {
        alert("Número inválido!")
    } else {
        seltab.innerHTML = ''
        result.innerHTML = ''
        values.push(valueAdd)
        for (let i in values) {
            let item = document.createElement('option')
            item.innerText = `Valor ${values[i]} adicionado`    
            seltab.appendChild(item)
        }
    }
}

function end() {
    if (values.length == 0) {
        alert("Adicione valores antes!")
    } else {
        let quant = values.length
        values.sort()
        let numMaior = values[quant-1]
        let numMenor = values[0]
        let soma = 0
        for (let i in values) {
            soma += Number(values[i])
        }
        let media = soma/quant

        result.innerHTML = `O número de valores adicionados foi ${quant}.<br>`
        result.innerHTML += `O maior número valor adicionado foi ${numMaior}.<br>`
        result.innerHTML += `O menor número valor adicionado foi ${numMenor}.<br>`
        result.innerHTML += `A soma dos valores adicionados é ${soma}.<br>`
        result.innerHTML += `A média dos valores adicionados é ${media}.<br>`
    }
}

document.getElementById('addb').addEventListener('click', add)
document.getElementById('endb').addEventListener('click', end)