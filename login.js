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
