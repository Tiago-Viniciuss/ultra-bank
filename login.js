function fazerLogin() {
    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value

    if (usuario == '1234' && senha == '1234') {
        location.href = 'home.html';
    } else {
        alert('Insira usuário e senha corretamente!')
    }



}