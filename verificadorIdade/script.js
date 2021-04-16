function carregar(){
    data = new Date();
    var ano = data.getFullYear();
    var txtano = document.getElementById('txtano')
    var resultado = document.querySelector('#res')

    //Se o ano não foi digitado ou o ano for maior que o atual
    if(txtano.value.lenght == 0 || Number(txtano.value) > ano)
    {
        window.alert("[ERRO] Verifique os dados novamente!")
    }else{
        var sexo = document.getElementsByName('radsex') // [0]masculino  [1]feminino
        var idade = ano - Number(txtano.value)
        var genero = ''

       //variavel que irá crtiar um elemento de imagem
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')  //criando tag de imagem pelo javaScript

        if(sexo[0].checked) //Se estiver checado como masculino
        {
            genero = 'Masculino'
            
            if(idade >= 0 && idade < 14){
                //Criança 
                imagem.setAttribute('src', 'imagens/menino criança.png')
            }else if (idade < 21){
                //Jovem
                imagem.setAttribute('src', 'imagens/menino jovem.png')
            }else if (idade < 49){
                //Adulto
                imagem.setAttribute('src', 'imagens/homem adulto.png')
            }else if (idade > 50 ){
                //Idoso
                imagem.setAttribute('src', 'imagens/homem idoso.png')
            }

        }else if(sexo[1].checked)
        {
            genero = 'Feminino'

            if(idade >= 0 && idade < 14){
                //Criança 
                imagem.setAttribute('src', 'imagens/menina criança.png')
            }else if (idade < 19){
                //Jovem
                imagem.setAttribute('src', 'imagens/menina jovem.png')
            }else if (idade < 49){
                //Adulto
                imagem.setAttribute('src', 'imagens/mulher.png')
            }else if (idade > 50 ){
                //Idoso
                imagem.setAttribute('src', 'imagens/idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `<h2>Gênero: ${genero} | Idade: ${idade} </h2>`
        resultado.appendChild(imagem)
    }
}
