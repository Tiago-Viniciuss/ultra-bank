function fazerLogin() {
    
    const senha = document.getElementById('senha').value

    if (senha == '1234') {
        location.href = 'home.html';
    } else {
        alert('Insira usuário e senha corretamente!')
    }
}

