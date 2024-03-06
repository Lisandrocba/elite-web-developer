function calcularFactorial(n: number): number {
  let result: number = 0;
  if (n < 0) {
    return NaN;
  }
  for (let i = n; i > 0; i--) {
    i == n ? (result = n) : (result = result * i);
  }
  return result;
}

console.log("El resultado del factorial es: ", calcularFactorial(5));

function calcularFibonacci(n: number): number {
    if (n < 0) {
        return NaN;
      } else if (n === 0) {
        return 0;
      } else if (n === 1 || n === 2) {
        return 1;
      } else {
        return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
      }
}

console.log("Resultado fibonacci: ", calcularFibonacci(7));

function esPalindromo (text : string): boolean{
    let clearText = text.replace(/ /g, "").toUpperCase()

    
        if(clearText.length <= 1){
            return true
        }
    
        if(clearText[0] !== clearText[clearText.length-1]){
            return false
        }  

    return esPalindromo(clearText.slice(1, clearText.length -1))
    
}

console.log("Resultado esPalindromo",esPalindromo("anita lava la tina"))
console.log("Resultado esPalindromo",esPalindromo("tatiana"))
console.log("Resultado esPalindromo",esPalindromo("Radar"))

function numberOfRoad (n: number, m:number): number{
    function factorial(num: number): number {
        if (num === 0) {
          return 1;
        }
        return num * factorial(num - 1);
      }
    return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1))
}

console.log("Cantidad de caminos posibles para el viajante: ",numberOfRoad(4, 3))