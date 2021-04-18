var painel = document.getElementById("painel")
var num = document.getElementById("txtnum")
var resultado = document.getElementById("tab")
var vetor = []

//Verificar se o campo inserido é um número
function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//Verificar se o número já existe na lista
function inList(n, v){
    if(v.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function guardar()
{
    painel.innerHTML = " "

    if(num.value.length == 0 ){
        window.alert("[ERROR] : Preencha o campo")

    }else if(isNumber(num.value) && !inList(num.value, vetor)){
        
        vetor.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `${Number(num.value)}`
        resultado.appendChild(item)
        painel.innerHTML = ''
    }else{
        window.alert("[ERROR]: É necessário ser um número e não estar na lista")
    }
    
    num.value = '' //Assim que preencher, limpar o campo
    num.focus()   //Deixar a caixa de texto marcada
}

function finalizar(){
    if(vetor.length == 0){
        window.alert("[ERROR]: Adicione valores antes de finalizar")
    }else{
        var maior = vetor[0]
        var menor = vetor[0]
        let soma = 0
        let media = 0

        for(let cont in vetor){
            soma += vetor[cont]

            if(maior < vetor[cont]){
                maior = vetor[cont]
            }else if(menor > vetor[cont]){
                menor = vetor[cont]
            }
        }
        media = soma / vetor.length

        painel.innerHTML = ''
        painel.innerHTML += `<p> O vetor possui ${vetor.length} elementos </p>`
        painel.innerHTML += `<p> O maior valor foi ${maior} </p>`
        painel.innerHTML += `<p> O menor valor foi ${menor} </p>`
        painel.innerHTML += `<p> A soma de todos deu em ${soma} </p>`
        painel.innerHTML += `<p> A média resultou em: ${media} </p>`
    }
}