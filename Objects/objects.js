//Declarando um objeto
let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p=0){ //Armazenando função dentro do objeto
    this.peso += p 
    console.log('Engordou')
}}

//Fazendo o amigo engordar
amigo.engordar(2)

//chamando um atributo do objeto
console.log(`O ${amigo.nome} pesa ${amigo.peso} `)