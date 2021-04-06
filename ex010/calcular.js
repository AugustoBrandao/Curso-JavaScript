
function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var resultado = window.document.getElementById('resultado')
    var velocidade  = Number(txtv.value)
    
    if(velocidade > 50){
        resultado.innerHTML = `Multado! - Limite: 50Km/h \n `
    }else if(velocidade <= 50){
        resultado.innerHTML = `<p> VELOCIDADE: <strong>${velocidade} km/h </strong> </p> `    
    }
}