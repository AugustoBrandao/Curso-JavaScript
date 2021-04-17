function contar(){

    var inicio = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var passos = document.getElementById("txtpassos")
    var resultado = document.getElementById("resultado")

    //Verificação de Campos
    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.lenght == 0)
    {
        window.alert("[Erro] - Dados incompletos!")

    }else{ //Se todos os campos foram preenchidos

        //Como todos os campos estão como string
        //Será necessário transformá-las em números
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        if(i < f)
        {
            //Criar contador ; contador menor ou igual ao final ; contador = contador + passos
            for(var cont = i; cont <= f; cont += p)
            {
                resultado.innerHTML += `${cont} - ` // Não se esqueça do += (imprimir e armazenar concatenando)
            }
        }else if(i >= f)
        {
            for(var cont = i; cont <= f; cont -= p){
                resultado.innerHTML += `${cont} - ` // Não se esqueça do += (imprimir e armazenar concatenando)
            }
        }
        
    }
}