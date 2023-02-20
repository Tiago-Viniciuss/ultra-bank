function criarPix() {
    var telapix = document.getElementById('fazerpix')

    telapix.style.display = 'block'
}


function enviarPix() {
    var pixenviado = document.getElementById('pixenviado')
    var teladopix = document.getElementById('fazerpix')
    var botao = document.getElementById('botaofazerpix')
    var nome = document.getElementById('destino')
    var chave = document.getElementById('chavepix')
    var valor = document.getElementById('valorpix')
    var senha = document.getElementById('senhapix')
    var receptor = document.getElementById('receptordopix')
    var valorenviado = document.getElementById('valorenviado')
    var datapix = document.getElementById('datadopix') 
    var data = new Date()
    var data1 = data.getDate()
    var mes1 = data.getMonth()
    var ano1 = data.getFullYear()
    var datacompleta = data1 + '/' + (mes1+1) + '/' + ano1
    var nome1 = String(nome.value)
    var valor1 = Number(valor.value)

    if (nome.value.length == 0 || chave.value.length == 0 || valor.value.length == 0 || senha.value.length == 0 ) {
        alert('Preencha todos os campos corretamente!')
        botao.style.display = 'none'  
    }
    
    
    teladopix.style.display = 'none'
    pixenviado.style.display = 'block'

    valorenviado.innerText = `R$${valor1}`
    receptor.innerText = `${nome1}`
    datapix.innerText = datacompleta
}

function fecharMenupix() {
    var telapix = document.getElementById('fazerpix')

    telapix.style.display = 'none'
}

function receberPix() {
    var qrcodepix = document.getElementById('qrcodepix')

    
        qrcodepix.style.display = 'flex'
    
}

function fecharQRcode() {
    var qrcodepix = document.getElementById('qrcodepix')

        qrcodepix.style.display = 'none'
}

    


    
