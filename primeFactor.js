class primeFactor {
    static getHighestPrime(range){
        let primeNum = 2;
        for (let i = 0; i <= range; i++){
            if(range % primeNum === 0){
                range /= primeNum;
            }else{
                primeNum++
            }        
        }
        return primeNum; 
    }
}

module.exports = primeFactor