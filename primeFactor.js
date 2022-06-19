class primeFactor { //Creando clase con metodo static que va a generar la busqueda del factor primo ma grande
    static getHighestPrime(range){  // declarando metodo estatico que toma un rango(numero) 
        let primeNum = 2; //variable que empieza con el numero 2 como rango 
        for (let i = 0; i <= range; i++){ // iterador que loopea mientras alcance el valor del rango
            if(range % primeNum === 0){ // condicional que revisa si el numero es divisible entre el primeNum
                range /= primeNum; //si es divisible se divide entre ese numero 
            }else{
                primeNum++ //se suma si no el primeNum para seguir iterando 
            }        
        }
        return primeNum; //regresa el numero primo mas alto que dividio la cifra
    }
}

module.exports = primeFactor // exportando usando Common JS  