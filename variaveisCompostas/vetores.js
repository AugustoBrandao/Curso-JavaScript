let num = [5, 4, 3]

num[3] = 6 //adicionando valor manualmente

console.log(`Vetor Desorganizado`)
console.log(num)
//Descobrir o comprimento do vetor
console.log(`O vetor tem ${num.length} posições`)
console.log(`Vetor Organizado: `)
num.push(7) //colocar o elemento no vetor
num.sort() //organizando o vetor


//imprimir todos os elementos do vetor na tela
//percurso do vetor
for(let cont = 0; cont < num.length; cont++)
{
    console.log(`Coluna ${cont} Valor ${num[cont]}`)
}

console.log(num)

//for in - otimizado para variaveis vetores e objetos -facil e simplificado
for(let cont in num) //para cada posição em num
{
    console.log(`Coluna ${cont} Valor ${num[cont]}`)
}
console.log(num)

// ver se o valor 7 existe no vetor
//ver onde está o valor 7
let valor = num.indexOf(7)

if(valor != -1)
{
    console.log(`O número 7 existe e está na coluna ${valor}`)
}else if(valor == -1)
{
    console.log(`[ERRO]: O número 7 não existe nesse vetor!`)
}