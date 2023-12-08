let hamburger = document.getElementById("hamburger");
let ul = document.getElementById("ul");

ul.style.height = "0px";

hamburger.addEventListener("click", () => {
  if (ul.style.height == "0px") {
    ul.style.height = "190px";
  } else {
    ul.style.height = "0px";
  }
});

let productArray = [];

const addItems = document.querySelectorAll(".add-cart");



addItems.forEach((el) => {
  el.addEventListener("click", () => {
    let itemName = el.parentElement.parentElement.querySelector("p").innerText;
    let itemRate =
      el.parentElement.parentElement.querySelector(".price-cart p").innerText;
    let itemImage = el.parentElement.parentElement.querySelector("img").src;
    let cartitems = document.querySelector(".cart-list");
    //console.log(cartitems);
    //console.log(productArray)

    if(productArray.includes(itemName)){
        alert("Product Already in the cart")
    }else{
        const cartlist = document.createElement("div");
        cartlist.className = "cart-items";
        cartlist.innerHTML = `
        <img src="${itemImage}" alt="">
                <div class="qty">
                    <p>${itemName}</p>
                    <p class="item-rate">${itemRate}</p>
                    <input type="number" id="input" value="1">
                </div>
                <div class="rs totalProductRate">${itemRate}</div>
                <i class="fa-solid fa-trash" id="remove"></i>
                `;

        cartitems.append(cartlist);
        productArray.push(itemName);
    }
    
    const input = document.querySelectorAll("#input");

    input.forEach((el) => {
      el.addEventListener("change", () => {
        if (el.value <= 0) {
          el.value = 1;
        }

        //console.log(el.value)
        //console.log(itemRate)
        //itemRate = itemRate.replace("$", " ");
        //console.log(itemRate);
        //let totalItemRate = parseInt(el.value) * parseInt(itemRate);
        //console.log(totalItemRate);
        //let totalProductRate = (el.parentElement.parentElement.querySelector(
          //".rs"
        //).innerHTML = "$" + totalItemRate);
        // totalProductRate=totalItemRate
        //console.log(totalProductRate);

        //let totalOfItems = el.parentElement.parentElement.querySelectorAll(".rs").innerHTML
        changeRate();
      });
      changeRate();
      const removeItem = document.querySelectorAll("#remove");
      

      removeItem.forEach((el) => {
        el.addEventListener("click", () => {
          el.parentElement.remove();

          const removedItemName = el.parentElement.querySelector(".qty p").innerHTML

          productArray = productArray.filter(el=> el!==removedItemName)
          changeRate();
        });
      });
    });
    
  });
});



const cartIcon = document.getElementById("carticon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector(".cart-head h1");

cartIcon.addEventListener("click", () => {
  cart.classList.add("cart-active");
});
cartClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

function changeRate(){
let productList = document.querySelectorAll(".cart-items");
let totalRate = document.querySelector(".cart-total");

let total = 0;

productList.forEach((product) => {
  let productRate = 
    product.querySelector(".item-rate").innerHTML.replace("$", "");
  console.log(parseInt(productRate));
  let qtyValue = product.querySelector("#input").value;
  total += parseInt(productRate) * qtyValue;
  product.querySelector(".rs").innerText = "Rs." + productRate * qtyValue;
});

totalRate.innerHTML = "RS." + total;
}
