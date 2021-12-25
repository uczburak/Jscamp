function addToCart(productName = "Elma", quantity) {
    console.log("Sepete Eklendi : " + productName + " adet : " + quantity)
}

//addToCart("Elma")
addToCart("Yumurta",10)
//addToCart("Karpuz")


let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 =  function () {
    console.log("Hellow World 2!")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Karpuz", 13, 38)

let product1 = {productName: "Elma", unitPrice:10, quantity:5}
function addToCart3(product) {
    console.log("Ürünün adı : "+product.productName, " Ürün sayısı : "+product.quantity, "Ürün Fiyatı : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName: "Elma", unitPrice:10, quantity:5}
let product3 = {productName: "Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName: "Elma", unitPrice:10, quantity:5},
    {productName: "Armut", unitPrice:10, quantity:5},
    {productName: "Karpuz", unitPrice:10, quantity:5},

]

addToCart4(products)

//rest

function add(number1, number2) {
    console.log(number1 + number2)
}

add(20,30)

function add2(...numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
         sum +=numbers[i];
    }
    console.log(sum)
}

add2(20,30,40,50,60,200)

//Spread

let spreadThatNumbers = [25,60,230,680,752,650,985,10,35,48]

console.log(Math.max(...spreadThatNumbers))

//Destructuring...!!!

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Giresun", "Trabzon"],
    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(karadenizSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = {productName: "Elma", unitPrice:10, quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)