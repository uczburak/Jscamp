function primeNumbers(prime) {
    let counter = 0

    for (let i = 1; i <= 1000; i++) {
        counter = i - 2
        
        for(let j = 2; j < i; j++){
            if(i % j !== 0){
                counter--
            }
            if(counter == 0) {
                prime.push(i)
            }
        }
    }
    console.log(...prime)
}

let prime = []
primeNumbers(prime)
