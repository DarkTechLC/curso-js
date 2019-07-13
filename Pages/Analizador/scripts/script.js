let number = document.querySelector('input#tnum')
let list = document.querySelector('select#seltab')
let result = document.querySelector('div#result')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(number.value) && !inList(number.value, values)) {
        values.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado`
        list.appendChild(item)
        result.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    number.value = ''
    number.focus()
}

function end() {
    if (values.length == 0) {
        alert('Adicione valores para prosseguir!')
    } else {
        let total = values.length
        let larger = values[0]
        let smaller = values[0]
        let amount = 0
        for (i in values) {
            amount += values[i]
            if (values[i] > larger)
                larger = values[i]
            if (values[i] < smaller)
                smaller = values[i]
        }
        let mean = amount / total
        
        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        result.innerHTML += `<p>O maior número é ${larger}.</p>`
        result.innerHTML += `<p>O menor número é ${smaller}.</p>`
        result.innerHTML += `<p>A soma dos números é ${amount}.</p>`
        result.innerHTML += `<p>A média dos números é ${mean}.</p>`
    }
}

document.getElementById('addb').addEventListener('click', add)
document.getElementById('endb').addEventListener('click', end)