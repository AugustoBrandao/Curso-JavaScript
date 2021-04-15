
function carregar(){
    var horas  = window.document.getElementById('horas')
    var imagem = window.document.getElementById('imagem')
    var dt = new Date();
    var hora  = dt.getHours();
    var min = dt.getMinutes();
    horas.innerText= `${hora}:${min}`

    if (hora >= 0 && hora < 12)
    {
        //Bom Dia
        imagem.src = 'imagens/Manhã.png'
        document.body.style.background = '#e2cd9f'

    }else if (hora > 12 && hora < 18){
        //Boa tarde 
        imagem.src = 'imagens/Tarde.png'
        document.body.style.background = '#b9846f'

    }else{
        //Boa noite 
        imagem.src = 'imagens/Noite.png'
        document.body.style.background = '#515154'
    } 
}



