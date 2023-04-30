let selectedImage = "image0"  
let cartCount = document.getElementById("cart-count")
let clickNumber = 0
let cartBtn = document.getElementById("cart")
let items= []
let w = 0
let clickCart = 0
let totalCount = 0

$(document).ready(function(){
   
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(productDatas){
        //  let container = document.getElementById("products")
        let left = document.getElementById("left")
        let right = document.getElementById("right")
        for(let i=0;i<productDatas.length;i++){
            items.push(productDatas[i])
        }
        
        for(let m=0;m<=productDatas.length;m++){

        
            if(location.search == `?id=${m}`){
                let productData = productDatas[m-1]
                left.innerHTML += `<img src=${productData.preview} class="leftpreview"/>`
                // left.innerHTML += left1
                // $("#left").append(left1)
                
                right.innerHTML += 
                `
                                <h1 id="name">${productData.name}</h1>
                                <h4 id="brand">${productData.brand}</h4>
                                <h3 id="price">Price: Rs <span>${productData.price}</span></h3>
                                <div id="desp">
                                    <h3>Description</h3>
                                    <p id="description">${productData.description}</p>
                                </div>
                                <div class="productpreview">
                                    <h3>Product Preview</h3>
                                    <div class="productimg" id="imgsrc">
                                        
                                    </div>
                                </div>
                                <button id="cart" class="btn-card">Add to Cart</button>
                `
                // right.innerHTML += right1
                // $("#right").append(right1)
    
                
                for(let i=0;i<productData.photos.length;i++){
                if(i==0){
                    document.getElementById("imgsrc").innerHTML += 
                    `
                        <img src=${productData.photos[i]} class="image active" id="image${i}" onclick="imageClicked(${i},${m})"/>
                    `
                    
                }
                else{
                    document.getElementById("imgsrc").innerHTML += 
                    `
                        <img src=${productData.photos[i]} class="image" id="image${i}" onclick="imageClicked(${i},${m})"/>
                    `
                }
                }
            }
            
        }
        
        // if(location.search == "?id=4"){
        //     console.log(location.search)
        //     console.log("hi")
        // }

        
        for(let i=1;i<=productDatas.length;i++){
            if(location.search == `?id=${i}`){
                // console.log("hello")
                $(".btn-card").click(function(){
                    // console.log("click")
                    clickCart+=1
                    // console.log(clickCart)
                    localStorage.setItem(`click${i}`,clickCart)
                    // totalClickingcount()
                    // localStorage.setItem("clicking",i)
                    totalCount = parseInt(localStorage.getItem("clicking"))+1
                    localStorage.setItem("clicking",totalCount)
                    console.log(totalCount)
                    let clickingCount = localStorage.getItem("clicking")
                    $("#cart-count").text(clickingCount)   
                   
                })
            }
        }
        
        // localStorage.clear()
        let clickingCount = localStorage.getItem("clicking")

        if(clickingCount == null){
            $("#cart-count").text("0")
            localStorage.setItem("clicking",0)
        }
        else{
            console.log(clickingCount)
            $("#cart-count").text(clickingCount) 
        }
        
        // console.log(localStorage.getItem("clicking"))
    })
    
    
})

// function totalClickingcount(){
//     totalCount+=1
//     console.log(totalCount)
//     localStorage.setItem("clicking",totalCount)
    
// }


console.log(localStorage.getItem("clicking"))




// console.log(location)
console.log(items)
// let btnCard = document.getElementsByClassName("btn-card")[0]
// let clickCart = 0 

// document.getElementById("cart").onclick = function(){
//     localStorage.setItem(clickCart)
//     console.log("click")
// }



// let clickingCount = localStorage.getItem("clicking")
// cartCount.innerText = clickingCount

        
function imageClicked(i,m){
    document.getElementById(selectedImage).classList.remove("active")
    let id = "image" + i
    selectedImage = id
    document.getElementById(id).classList.add("active")
    document.querySelector("#left img").src = items[m-1].photos[i]
    // console.log("hello")
}  





