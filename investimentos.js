function abrirEnquete() {
    var enquete = document.getElementById('enquete')
    var botaoabrir = document.getElementById('abrirenquete')

    botaoabrir.style.display = 'none'
    enquete.style.display = 'block'
}

function cancelarEnquete() {
    var enquete = document.getElementById('enquete')
    
    enquete.style.display = 'none'
}

function verificarResposta() {
    var enquete = document.getElementById('enquete')
    var botaoabrir = document.getElementById('abrirenquete')
    var resultado = document.getElementById('resultadoenquete')
    var tempo = document.getElementsByName('tempo')
    var valor = document.getElementsByName('valor')
    var coragem = document.getElementsByName('coragem')
    var resposta = document.getElementById('perfilresposta')
    var comentario = document.getElementById('perfilcomentario')
    
    enquete.style.display = 'none'
    resultado.style.display = 'block'
    botaoabrir.style.display = 'none'

    if (tempo[0].checked && valor[0].checked && coragem[1].checked) {
        resposta.innerText = `Conservador` , comentario.innerText = `Sua cautela é muito compreensível. Continue buscando conhecimento sobre investimentos e comece a ganhar mais confiança nas suas operações. Confira alguns investimentos que combinam com você.`
    } else if (tempo[0].checked && valor[1].checked && coragem[0].checked) {
        resposta.innerText = `Agressivo` , comentario.innerText = `Você é bem confiante no que diz respeito ao mercado financeiro. Apesar do investimento a curto prazo, o fato de querer investir acima de 10 mil e também na bolsa lhe torna um investidor agressivo.`
    } else if (tempo[1].checked && valor[1].checked && coragem[0].checked) {
        resposta.innerText = `Agressivo` , comentario.innerText = `Sua confiança no mercado é surpreendente! Investidores como você são considerados agressivos, pois calculam muito bem os riscos das operações e os seus respectivos lucros a longo prazo. Temos ótimas carteiras e ações disponíveis.`
    } else if (tempo[1].checked && valor[0].checked && coragem[1].checked) {
        resposta.innerText = `Moderado` , comentario.innerText = `Apesar de optar por aportes menores e fugir da bolsa de valores, sua escolha para investimentos de longo prazo o tornam um investidor moderado. Continue estudando as novas possibilidades.`
    } else if (tempo[0].checked && valor[0].checked && coragem[0].checked) {
        resposta.innerText = `Moderado` , comentario.innerText = `Sua motivação ao investir na bolsa, mesmo que valores menores, o levará a grandes resultados em breve. Continue investindo e se adequando às novas modadalidades de investimentos.`
    } else if (tempo[1].checked && valor[1].checked && coragem[1].checked) {
        resposta.innerText = `Moderado` , comentario.innerText = `Grande escolha! Os investimentos a longo prazo são os melhores quando falamos em juros compostos. Certifique-se de manter sua carteira mista e conheça mais sobre as ações na Bolsa. Está indo pelo caminho certo.`
    }
}