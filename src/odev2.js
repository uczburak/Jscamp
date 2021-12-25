function friendNumbers(num1,num2) {
    let sum1 = 0
    let sum2 = 0

    for (let i = 0, j=0; i < num1/2+1, j < num2/2+1; i++,j++) {
        if(num1%i==0) {
            sum1 += i
        }
        if(num2%j==0) {
            sum2 += j
        }
    }
    if(sum1 == num2 && sum2 == num1) {
        console.log(num1 + " ve " + num2 + " Sayıları Arkadaş Sayılardır!")
    }
    else {
        console.log(num1 + " ve " + num2 + " Sayıları Arkadaş Sayı Değiller!")
    }
    
}
friendNumbers(1185,1210)