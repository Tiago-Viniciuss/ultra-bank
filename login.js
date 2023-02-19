
function fazerLogin() {
    let usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value
   
    if (usuario == '1234' && senha == '1234') {
        location.href = 'home.html';
    } else {
        alert('Insira usuário e senha corretamente!')
    }

}
    function gerarDados() {
    var nomeusuario1 = document.getElementById('nome1')

    var nomeusuario = nomeusuario1.value

    var dados = document.getElementById('dadosdeacesso')

    if (nomeusuario == 0) {
        alert('Digite o seu nome!')
    } else {
        dados.innerHTML = `<p id:"dados">Olá, <strong>${nomeusuario}</strong>! <br> <br> Seja bem-vindo(a) ao Ultra Bank. <br> <br> Seus dados de acesso são: <br> <br> Usuário: <strong>1234</strong> <br> Senha: <strong>1234</strong></p>`

    };

   

   
    }
   

function esconderSaldo() {
    var saldo = document.getElementById('saldo')
    var escondersaldo = document.getElementById('escondersaldo')

    if (saldo.style.visibility == 'visible') {
        saldo.style.visibility = 'hidden'
    } else {
        saldo.style.visibility = 'visible'
    }

    if (saldo.style.visibility == 'visible') {
        escondersaldo.innerText = 'visibility'
    } else {
        escondersaldo.innerText = 'visibility_off'
    }
}


function abrirMenu() {

    var operacoesplus = document.getElementById('menuopcoes')


    if (operacoesplus.style.display == 'flex') {
        operacoesplus.style.display = 'none' 
    } else {
        operacoesplus.style.display = 'flex'
    }

    if (operacoesplus.style.display == 'flex') {
        botaomenu.innerText = 'expand_less'
    } else ( botaomenu.innerText = 'expand_more' )

}


function abrirConfig() {

    var configuracoes = document.getElementById('configuracoes')

    if (configuracoes.style.visibility == 'visible') {
        configuracoes.style.visibility = 'hidden'
    } else {
        configuracoes.style.visibility = 'visible'
    }

}

