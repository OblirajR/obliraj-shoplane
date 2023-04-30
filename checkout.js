
let products=[]

$(document).ready(function(){
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(productData){
        console.log(productData)

        for(let i=0;i<productData.length;i++){
            products.push(productData[i])
            if(localStorage.getItem(`click${i+1}`) != null){
            
            let numbers = localStorage.getItem(`click${i+1}`)
            let pricing = productData[i].price * numbers
            let checkout = 
            `
                <div class="display">
                    <div class="place-left">
                        <img src=${productData[i].preview} alt="" class="checkout-preview"/>
                    </div>
                    <div class="place-right">
                        <h2 class="place-h">${productData[i].name}</h2>
                        <p>x<span>${numbers}</span></p>
                        <p>Amount: Rs ${pricing}</p>
                    </div>
                </div>
            `
            $("#checkout-left").append(checkout)
                
            
            

            }
        }
        let totalAmount=0
        for(let j=0;j<productData.length;j++){
            totalAmount += localStorage.getItem(`click${j+1}`) * productData[j].price
            $("#total-amount").text(totalAmount)
            console.log(totalAmount)
         }

    })
})

document.getElementById("place-order").onclick = function(){
    localStorage.clear()
}

let show = document.getElementsByClassName("none")


for(let i=1;i<=products.length;i++){
    if(localStorage.getItem(`click${i}`) != null){

    }
}





