
$(document).ready(function(){
    
    $('.slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplayspeed: 10,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false
    });
    
   $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(productList){
      let cardClothing = document.getElementById("card1")
      let cardAccessory = document.getElementById("card2")
      
      let clothing = []
      let accessory = []
      let k = 1
      
      for(let i=0;i<productList.length;i++){
        if(productList[i].isAccessory == false){
          clothing.push(productList[i])
        }
        else{
          accessory.push(productList[i])
        }
      }
      
      function cardCreate(item){
        let cardList = 
          ` 
            <div class="fullcard">
              <a href="./products.html?id=${k}" class="image">
                <img src=${item.preview} alt=${item.name}/>
              </a>
              <div class="details">
                <p class="name">${item.name}</p>
                <h4 class="brandname">${item.brand}</h4>
                <h5 class="price">Rs ${item.price}</h5>
              </div>
            </div>
          `
          k+=1
        return cardList
      }
      
      for(i=0;i<clothing.length;i++){
        let grid = cardCreate(clothing[i])
        cardClothing.innerHTML += grid
      }
      
      for(i=0;i<accessory.length;i++){
        let grid1 = cardCreate(accessory[i])
        cardAccessory.innerHTML += grid1
      }

      // console.log(location)
      
      // let clickingCount = localStorage.getItem("clicking")
      // $("#cart-count").text(clickingCount) 
   })
   
     	
})

