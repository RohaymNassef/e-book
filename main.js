document.querySelector('.search-nav').onclick = function(){
    document.querySelector('.search-click').classList.add('open');
}
document.querySelector('.close-search').onclick = function(){
    document.querySelector('.search-click').classList.remove('open');
}
document.querySelector('.user-nav').onclick = function(){
    document.querySelector('.user-click').classList.add('open');
}
document.querySelector('.close-user').onclick = function(){
    document.querySelector('.user-click').classList.remove('open');
}
const swiper = new Swiper('.home-parent', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // ---------------------------product
  let p = '';
  products.map(function(product){
    p +=`<div class="product">
    <img src="${product.img}" alt="">
    <h2>${product.title}</h2>
    <h3>Price : ${product.price}$</h3>
    <button onclick ='addToCart(${product.id})'>Add To Cart</button>
</div>`
document.querySelector(".product-flex").innerHTML = p;
  })
  const swiperr = new Swiper('.testimonail-perant', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // Add To Cart
  let cartItems = [];
  function addToCart(item){
    let selectItem = products.find(product => product.id == item);
    if(cartItems.includes(selectItem)){
      Swal.fire({
        title: "this is product are finded",
        icon: "error",
        timer : 1500,
        showConfirmButton : false,
      });
    }else{
      cartItems.push(selectItem);
      Swal.fire({
        title: "Good job!",
        icon: "success",
        timer : 1500,
        showConfirmButton : false
      });
    }
    displayProductCart();
    if(cartItems.length > 0){
      document.querySelector(".total").style.display = 'flex';
    }
  }
  function displayProductCart(){
    let cart = '';
    let total = 0;
    cartItems.map(function(product){
      total += product.price;
      cart += `
    <div class="cart-product">
        <img src = "${product.img}">
        <h2>price : $${product.price}</h2>
        <button onclick = 'removeCart(${product.id})'>Remove Product</button>    
    </div>`
    document.querySelector(".cart-products").innerHTML = cart;
    document.querySelector(".total-number").innerHTML = `${total}$`;
    }) 
  }
  // --------remove form cart
function removeCart(item){
  cartItems = cartItems.filter(product => product.id != item);
  displayProductCart();
  Swal.fire({
    title: "This prodduct are removed",
    icon: "success",
    timer : 2000,
    showConfirmButton : false
  });
}
document.querySelector(".moon").onclick =function(){
  document.querySelector("body").classList.add("dark");
  document.querySelector(".moon").style.display = "none";
  document.querySelector(".sun").style.display = "flex";
}
document.querySelector(".sun").onclick =function(){
  document.querySelector("body").classList.remove("dark");
  document.querySelector(".moon").style.display = "flex";
  document.querySelector(".sun").style.display = "none";
}