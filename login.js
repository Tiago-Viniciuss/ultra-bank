/*let nome = document.getElementById('usuario')

let saudacao = document.getElementById('saudacao')

saudacao.innerHTML = `ola seja bem vindo ${nome}`*/


function fazerLogin() {
    let nome = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value
   
    if (senha == '1234') {
        location.href = 'home.html';
    } else {
        alert('Insira usuário e senha corretamente!')
    }

}

function esconderSaldo() {
    var saldo = document.getElementById('saldo')
    var escondersaldo = document.getElementById('escondersaldo')

    if (saldo.style.visibility == 'visible') {
        saldo.style.visibility = 'hidden'
    } else {
        saldo.style.visibility = 'visible'
    }
}


function abrirMenu() {

    var operacoesplus = document.getElementById('menuopcoes')


    if (operacoesplus.style.display == 'flex') {
        operacoesplus.style.display = 'none' 
    } else {
        operacoesplus.style.display = 'flex'
    }

}


function menuPessoal() {

    var menupessoal = document.getElementById('menupessoal')

    if (menupessoal.style.visibility == 'visible') {
        menupessoal.style.visibility = 'hidden'
    } else {
        menupessoal.style.visibility = 'visible'
    }

}


function retrairMenu() {
    var menu = document.getElementById('menupessoal')

    if ( menu.style.visibility == 'visible') {
        menu.style.visibility = 'hidden'
    } else {
        menu.style.visibility = 'visible'
    }

}