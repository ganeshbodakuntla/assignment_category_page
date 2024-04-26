let productDiv = document.querySelector(".products");
let men = document.querySelector(".button1");
let women = document.querySelector(".button2");
let kids = document.querySelector(".button3");

// console.log('====================================');
// console.log("Connected");
// console.log('====================================');
let displayProducts = async () => {
  productDiv.innerHTML = " ";
  let product = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  );
  let finalProduct = await product.json();
  console.log(finalProduct);
  men.addEventListener("click", () => {
    productDiv.innerHTML = " ";
    let productsmen = finalProduct;
    let menproduct = productsmen.categories[0].category_products;
    menproduct.forEach((element) => {
      let actualPrice = element.compare_at_price;
      let discountPrice = element.price;
      let percentage = Math.floor(
        ((actualPrice - discountPrice) / actualPrice) * 100
      );
      productDiv.innerHTML += `<div class="productitems">
            <img src=${element.image} alt="">
            <div class="float">
            <h2>${element.badge_text}</h2>
        </div>
           <div class="names">
            <h2 class="title">${element.title}</h2>
            <!-- <h2 class="vendor">.Manyar</h2> -->
            <li class="vendor" style="list-style-type:disc">${element.vendor}</li>
           </div>
           <div class="prices">
            <h4 class="price he">Rs ${element.price}.00</h4>
            <h4 class="compareprice he">${element.compare_at_price}</h4>
            <h5 class="off he">${percentage}% off</h5>
           </div>
            <button class="addcart">Add to Cart</button>
        </div>`;
    });
  });
  women.addEventListener("click", () => {
    productDiv.innerHTML = " ";
    let productsmen = finalProduct;
    let menproduct = productsmen.categories[1].category_products;
    menproduct.forEach((element) => {
      let actualPrice = element.compare_at_price;
      let discountPrice = element.price;
      let percentage = Math.floor(
        ((actualPrice - discountPrice) / actualPrice) * 100
      );
      productDiv.innerHTML += `<div class="productitems">
            <img src=${element.image} alt="">
            <div class="float">
            <h2>${element.badge_text}</h2>
        </div>
           <div class="names">
            <h2 class="title">${element.title}</h2>
            <!-- <h2 class="vendor">.Manyar</h2> -->
            <li class="vendor" style="list-style-type:disc">${element.vendor}</li>
           </div>
           <div class="prices">
            <h4 class="price he">Rs ${element.price}.00</h4>
            <h4 class="compareprice he">${element.compare_at_price}</h4>
            <h5 class="off he">${percentage}% off</h5>
           </div>
            <button class="addcart">Add to Cart</button>
        </div>`;
    });
  });
  kids.addEventListener("click", () => {
    productDiv.innerHTML = " ";
    let productsmen = finalProduct;
    let menproduct = productsmen.categories[2].category_products;
    menproduct.forEach((element) => {
      let actualPrice = element.compare_at_price;
      let discountPrice = element.price;
      let percentage = Math.floor(
        ((actualPrice - discountPrice) / actualPrice) * 100
      );

      productDiv.innerHTML += `<div class="productitems">
            <img src=${element.image} alt="">
            <div class="float">
            <h2>${element.badge_text}</h2>
        </div>
           <div class="names">
            <h2 class="title">${element.title}</h2>
            <!-- <h2 class="vendor">.Manyar</h2> -->
            <li class="vendor" style="list-style-type:disc">${element.vendor}</li>
           </div>
           <div class="prices">
            <h4 class="price he">Rs ${element.price}.00</h4>
            <h4 class="compareprice he">${element.compare_at_price}</h4>
            <h5 class="off he">${percentage}% off</h5>
           </div>
            <button class="addcart">Add to Cart</button>
        </div>`;
    });
  });
};
displayProducts();
// console.log(finalProduct)
