var tn1 = document.getElementById('display1')
var tn2 = document.getElementById('display2')
var res = document.getElementById('resultado')


function somar(n1, n2) {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var r = n1 + n2
    res.innerHTML = `=<strong>${r}</strong>`
    return r
}

function subtrair(n1, n2) {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var r = n1 - n2
    res.innerHTML = `=<strong>${r}</strong>`
    return r
}

function multiplicar(n1,n2) {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var r = n1 * n2
    res.innerHTML = `=<strong>${r}</strong>`
    return r
}

function dividir(n1, n2) {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var r = n1 / n2
    res.innerHTML = `=<strong>${r}</strong>`
    return r
}
