function isPrime(...numbers) {
    console.log("Gönderilen Sayılar : "+numbers)
    for (var k = 0; k <= numbers.length; k++) {
        let divisor = 2
        if(numbers[k] == 0) console.log(numbers[k] + " Sayısı asal bir sayı değildir!")
        if(numbers[k] == 1 || numbers[k] == 2) {console.log(numbers[k] + " Sayısı asal bir sayıdır!")}
            
        for (let j = 2; j < (numbers[k]/2); j++) {
            if(numbers[k] % j==0){
                console.log(numbers[k] + " Sayısı asal bir sayı değildir!")
                break
            }
            else if(j==numbers[k]-1){
                console.log(numbers[k] + " Sayısı asal bir sayıdır!")
                break
            }
        }

    }
}
isPrime(20,21,22,23,24,25,26,27,28,29,30,0,1,2,3,4,5,6,7,8,9,10)
