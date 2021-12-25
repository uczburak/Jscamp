
let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarBugun)

let konutKredileri = ["Konut Kredisi", "Emlak/Konut Kredisi", "Kamu/Konut Kredisi", "Bireysel Konut Kredisi", "Özel Konut Kredisi"]

console.log(konutKredileri)

console.log("<ul>")

for(let i = 0; i < konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")