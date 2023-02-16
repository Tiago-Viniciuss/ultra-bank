function fazerLogin() {
    
    const senha = document.getElementById('senha').value

    if (senha == '1234') {
        location.href = 'home.html';
    } else {
        alert('Insira usuário e senha corretamente!')
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

    if (menupessoal.style.display == 'flex') {
        menupessoal.style.display = 'none'
    } else {
        menupessoal.style.display = 'flex'
    }

}


function retrairMenu() {
    var menu = document.getElementById('menupessoal')

    if ( menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }

}