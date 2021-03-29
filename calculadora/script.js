function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function limpar()
{
    document.getElementById('resultado').innerHTML = " "
}

//apagar somente o último dígito 
//implementação futura
function back()
{
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0 , resultado.length -1)
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML

    //se tiver algum valor
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}