// code from https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".nav-items");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// HTML product section
const productData = [
  {
    name: "Make Up Kit",
    description: "All you need in one pack",
    include: ["Foundation /", " Blush /", " Eye Liner"],
    price: '$38.99',
    photo: "assets/images/kit.jpg"
  },
  {
    name: "Lipsticks",
    description: "Baddie X3 Lip Colors",
    include: ["Dark Red /", " White /", " Brown "],
    price: '$27.49',
    photo: "assets/images/lipstick.jpg"
  },
  {
    name: "Brush Kit",
    description: "Brush it On",
    include: ["Smokey Brush /", " Shadow Brush /", " Powder Brush"],
    price: '$17.99',
    photo: "assets/images/brushes.jpg"
  }
];

function itemList(items){
        return `
        <h4>Includes</h4>
        ${items.map(function(item){
          return `<i>${item}</li>`
        }).join('')}
        `
}

function priceList(prices){
  return `
  <h4>check</h4>
  ${prices.map(function(price){
    return `<p>${price}</p>`
  }).join('')}
  `
}

function productTemplate(product){
  return `
      <div class ="product-container">
          <img class="pet-photo" src="${product.photo}">
          <h2 class="product-header">${product.name}</h2>
          <p class="product-text">${product.description} </p>
          ${product.include ? itemList(product.include) : ''}
          <h3>${product.price}</h3>
      </div>
  `
}

document.getElementById("product").innerHTML = `${productData.map(productTemplate).join('')}`