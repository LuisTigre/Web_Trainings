const numeros = [12,24,34,2,567,6,88,3,5,7,754]
const par = n => n % 2 === 0
const numerosPar = numeros.filter(par)

console.log(`Array com numeros pares: ${numerosPar}`)