let valores = [8,1,7,4,2,9]
/*
for( var indice=0; indice < valores.length; indice++){
    console.log(`A posição ${indice} do vetor tem o valor ${valores[indice]}.`)
}
*/
for (let indice in valores){
    console.log(`A posição ${indice} do vetor tem o valor ${valores[indice]}.`)
}