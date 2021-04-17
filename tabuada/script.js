function tabuada(){
    var tabuada = document.getElementById("txttab")
    var limite = document.getElementById("txtlim")
    var resultado = document.getElementById("tab")

    resultado.innerHTML = " "
    
    if(tabuada.value.length == 0 || limite.value.length == 0){
        window.alert("[ERROR] : Preencha todos os campos")
    }else{

        var r = 0
        var t = Number(tabuada.value)
        var l = Number(limite.value)

        for(var cont = 1; cont <= l; cont++ ){
            r = cont * t

            let item = document.createElement('option')
            item.text = ` ${t} x ${cont} = ${r} `
            resultado.appendChild(item)
        }
    }
}