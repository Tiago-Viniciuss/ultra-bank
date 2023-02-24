
function salvarDados() {
    var nome1 = document.getElementById('nome')
    var senha1 = document.getElementById('senha')

    var nome = String(nome1.value)
    var senha = Number(senha1.value)
    alert(`Parabéns, ${nome}, sua conta foi criada!`)

    localStorage.setItem ('nome', nome)
    localStorage.setItem ('senha', senha)
    location.href = 'index.html';
}


function fazerLogin() {
    var usuario1 = document.getElementById('usuario')
    var senha1 = document.getElementById('senha')

    var nomecheck = String(usuario1.value)
    var senhacheck = Number(senha1.value)
    var nomeguardado = localStorage.getItem('nome')
    var senhaguardada = localStorage.getItem('senha')


    if(nomecheck == nomeguardado && senhacheck == senhaguardada) {
        location.href = 'home.html';
    } else {
        alert('Usuário ou senha incorreto')
    }
    
}


    function mostrarSaudacao() {
        var saudacao = document.getElementById('saudacao')
        nomeguardado = localStorage.getItem('nome')
        
        saudacao.innerText = `Seja bem-vindo(a), ${nomeguardado}!`
    }

    function gerarDados() {
    var usuario = document.getElementById('nome1')
    var nomeguardado = localStorage.getItem('nome')
    var senhaguardada = localStorage.getItem('senha')
    var resultado = document.getElementById('resultado')

    var nome = String(usuario.value)
    if(nome.length == 0) {
        alert('Digite um nome válido!')
    } else if(nome == nomeguardado) {
        resultado.innerHTML = `Tudo bem, ${nomeguardado}? Sua senha de acesso é <strong>${senhaguardada}</strong>. <br> <br> Lembre-se de guarda-la!`
    } else {
        resultado.innerHTML = 'Você errou seu nome de usuário ou talvez você ainda não possui cadastro. Abra uma conta agora mesmo: <br> <br> <a href="abrirconta.html">Através deste link, podes abrir sua conta gratuitamente!</a>'
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

    if (saldo.style.visibility == 'visible') {
        escondersaldo.value = 'visibility'
    } else {
        escondersaldo.value = 'visibility_off'
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
    var nav = document.getElementById('nav')
    
    nav.classList.toggle('active')
}

function versoCartao() {
    var cartao1 = document.getElementById('cartaocredito')
    var cartao2 = document.getElementById('cartaocredito2')
    var botaofrente = document.getElementById('botaofrente')
    var botaofundo = document.getElementById('botaofundo')

    cartao1.style.display = 'none', cartao2.style.display = 'block'

    botaofrente.style.visibility = 'visible'
    botaofundo.style.visibility = 'hidden'
    
}

function frenteCartao() {
    var cartao1 = document.getElementById('cartaocredito')
    var cartao2 = document.getElementById('cartaocredito2')
    var botaofundo = document.getElementById('botaofundo')


    cartao1.style.display = 'block', cartao2.style.display = 'none'
  
    botaofrente.style.visibility = 'hidden'
    botaofundo.style.visibility = 'visible'
}

function bloquearCartao() {
    var cadeado = document.getElementById('bloquearcartao')
    var saldo = document.getElementById('creditodisponivel')
    var frase = document.getElementById('creditofrase')
    var bloqueionome = document.getElementById('bloqueionome')

   
    
    if (frase.innerText == 'Crédito disponível') {
        frase.innerText = 'CRÉDITO BLOQUEADO',frase.style.fontWeight = 'bold' ,saldo.style.color = 'lightgray', cadeado.value = 'lock_open', bloqueionome.innerText = 'Desbloquear'
    } else if  (frase.innerText == 'CRÉDITO BLOQUEADO') {
        frase.innerText = 'Crédito disponível', frase.style.fontWeight = 'normal',  saldo.style.color = 'black', cadeado.value = 'lock', bloqueionome.innerText = 'Bloquear'
    }

}

function abrirmenuCartao() {
    var menucartao = document.getElementById('menucartoes')

    menucartao.classList.toggle('active')
}

function fecharmenuCartao() {
    var menucartao = document.getElementById('menucartoes')

    if (menucartao.classList.toggle('active')) {
        menucartao.classList.toggle('deactivate')
    }
}

/*
    LOGIN DESKTOP
*/

function abrirmenuConta() {
    var menudesktop = document.getElementById('formbox')

    menudesktop.classList.toggle('active')
}

function cadastroConta() {
    var formulariocadastro = document.getElementById('abrircontaform')
    var article = document.getElementById('articleconta')
    var botao = document.getElementById('cadastrobotao')

    formulariocadastro.style.display = 'flex'
    article.style.display = 'none'
    botao.style.display = 'none'

}

function mostrarSenha() {
    var senha = document.getElementById('senha')

    if(senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text')
    } else {
        senha.setAttribute('type', 'password')
    }
}

function abrirOpcoes() {
    var menu = document.getElementById('sectionmenu')

    menu.classList.toggle('active')
}