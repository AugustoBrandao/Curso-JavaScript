function parimpar(n){   if( n%2 == 0 ){ return 'Par!' }else{ return "ímpar!" }  }
console.log(parimpar(3))

function soma(n1 = 0, n2 = 0){  return n1 + n2  }
console.log(soma(2,3))

// 3! = 3 x 2 x 1
function fatorial(n)
{
    // forma 1  
    let fatorial = n
    for(let cont = 1; cont < n; cont++ ){   fatorial *=  cont   }
    //forma 2
    fatorial = 1
    for(let cont = n; cont > 1; cont-- ){   fatorial *=  cont   }

    return console.log(fatorial)
}

fatorial(4)

//FUNÇÕES RECURSIVAS 
//Funções que chama á elas mesmas
// Se 5! = 5 x 4 x 3 x 2 x 1
// Logo 5! = 5 x 4!
function fatorialRecursivo(n)
{
    if(n == 1){ return 1 }else{    return n * fatorialRecursivo(n-1)   }
}

console.log(fatorialRecursivo(120))