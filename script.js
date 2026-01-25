 const products = [
  {
    id: 1,
    title: "Lipstick",
    price: 500,
    image: "https://wwd.com/wp-content/uploads/2024/08/Nars-Best-Red-Lipsticks.jpg?w=1000",
    category: "Lips",
    for_lips: true,
    for_eyes: false,
    for_face: false,
    inStock: true,
    discount: false,
    isTop: true,
    color: "red",
    feedback: "Супер чудова помада!",
    description: "Яскрава стійка помада для щоденного макіяжу."
  },
  {
    id: 2,
    title: "Mascara",
    price: 399,
    image: "https://cdn.salla.sa/xAWDQP/3b0e2053-d5f7-4bba-a83a-5c8602ab67c8-1000x1000-dvLaxSgI6VvkmFJUnf56lpNPDgsiodfYHH5r4aIa.png",
    category: "Eyes",
    for_lips: false,
    for_eyes: true,
    for_face: false,
    inStock: true,
    discount: false,
    isTop: true,
    color: "black",
    feedback: "Супер чудова туш!",
    description: "Подовжує та додає об’єму віям без злипання."
  },
  {
    id: 3,
    title: "Face Powder",
    price: 349,
    image: "https://u.makeup.com.ua/v/vp/vpgorswfclka.jpg",
    category: "Face",
    for_lips: false,
    for_eyes: false,
    for_face: true,
    inStock: true,
    discount: true,
    isTop: false,
    color: "beige",
    feedback: "Дуже ніжна та легка пудра.",
    description: "Матова компактна пудра для природного вигляду."
  },
  {
    id: 4,
    title: "Lip Gloss",
    price: 250,
    image: "https://lip.com.ua/files/products/s2835155-main-zoom.1000x.webp",
    category: "Lips",
    for_lips: true,
    for_eyes: false,
    for_face: false,
    inStock: false,
    discount: false,
    isTop: false,
    color: "pink",
    feedback: "Дуже гарний блиск!",
    description: "Блиск для губ з блискітками, додає сяяння."
  },
  {
    id: 5,
    title: "Eyebrow Pencil",
    price: 199,
    image: "https://images.prom.ua/4383278581_w640_h640_4383278581.jpg",
    category: "Eyes",
    for_lips: false,
    for_eyes: true,
    for_face: false,
    inStock: true,
    discount: false,
    isTop: false,
    color: "brown",
    feedback: "Гарно малює, тримається довго.",
    description: "Олівець для брів з натуральним відтінком."
  },
  {
    id: 6,
    title: "BB Cream",
    price: 420,
    image: "https://pwa-api.eva.ua/img/0/0/source//7/7/777415_1_1728552326.jpg",
    category: "Face",
    for_lips: false,
    for_eyes: false,
    for_face: true,
    inStock: true,
    discount: true,
    isTop: true,
    color: "light beige",
    feedback: "Дуже легкий, гарно вирівнює тон.",
    description: "Легкий BB-крем для щоденного використання."
  },
  {
    id: 7,
    title: "Eyeliner",
    image: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42769%2F42769_1.png&MediaId=13785347&Version=1",
    price: 280,
    category: "Eyes",
    for_lips: false,
    for_eyes: true,
    for_face: false,
    inStock: true,
    discount: false,
    isTop: false,
    color: "black",
    feedback: "Гарно тримається весь день.",
    description: "Рідка підводка для ідеальних стрілок."
  },
  {
    id: 8,
    title: "Blush",
    price: 330,
    image: "https://m.media-amazon.com/images/I/51LY8zWWFdL.jpg",
    category: "Face",
    for_lips: false,
    for_eyes: false,
    for_face: true,
    inStock: false,
    discount: true,
    isTop: false,
    color: "peach",
    feedback: "Класний відтінок персика.",
    description: "Рум’яна для природного рум’янцю."
  },
  {
    id: 9,
    title: "Matte Lipstick",
    price: 550,
    image: "https://glowbeauty.com.ua/image/cache/catalog/glowbeauty/40564-Laura-Mercier-143-Nude-Sateen-3.8g/40564-1-Laura-Mercier-143-Nude-Sateen-3.8g-auto_width_1000.PNG",
    category: "Lips",
    for_lips: true,
    for_eyes: false,
    for_face: false,
    inStock: true,
    discount: false,
    isTop: true,
    color: "nude",
    feedback: "Ідеальна матова помада.",
    description: "Матова помада насиченого кольору, стійка до 12 годин."
  },
  {
    id: 10,
    title: "Highlighter",
    price: 470,
    image: "https://discountstore.pk/cdn/shop/files/81qGMvbrBkL_1200x.jpg?v=1724768405",
    category: "Face",
    for_lips: false,
    for_eyes: true,
    for_face: true,
    inStock: true,
    discount: false,
    isTop: true,
    color: "gold",
    feedback: "Дуже гарно сяє!",
    description: "Хайлайтер з золотистим блиском для підкреслення вилиць."
  }
];




let cart = [];
const minPriceInput = document.getElementById("min-price-input");
const resultsInfo = document.getElementById("results-info");

const cartInfo = document.getElementById("cart-info");
const clearCartBtn = document.getElementById("clear-cart-btn");
const productsContainer = document.getElementById("products-container");

const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    try {
      const parsed = JSON.parse(savedCart);
      if (Array.isArray(parsed)) {
        cart = parsed;
      } else {
        cart = [];
      }
    } catch (error) {
      cart = [];
    }
  } else {
    cart = [];
  }
}

function savecart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  cartInfo.textContent = `Товарів у кошику: ${cart.length}`;
}

function clearCart() {
  cart = [];
  savecart();
  updateCartCount();
}

clearCartBtn.addEventListener("click", clearCart);

function renderProducts(productsArray) {
  productsArray.forEach(function (product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
    <img src="${product.image}" class="product-img">
      <h3>${product.title}</h3>
      <p class="products-category">Категорія: ${product.category}</p>
      <p class="products-description">${product.description}</p>
      <p class="product-price">Ціна: ${product.price} грн</p>
      <button class="add-to-card-btn">Додати в кошик</button>
    `;

    const addButton = card.querySelector(".add-to-card-btn");
    addButton.addEventListener("click", function () {
      cart.push(product.id);
      savecart();
      updateCartCount();
      console.log(`Поточний список товарів: ${cart}`);
    });

    productsContainer.appendChild(card);
  });
}


function filterAndRender(){
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  const minPriceValue = minPriceInput.value;

  const filteredProducts = products.filter(function(product){
    const title = product.title.toLowerCase();
    const description = product.description.toLowerCase();

    const matchesText =
      searchText === "" ||
      title.includes(searchText) ||
      description.includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesPrice =
      minPriceValue === "" ||
      product.price >= Number(minPriceValue);

    return matchesText && matchesCategory && matchesPrice;
  });

  productsContainer.innerHTML = "";
  renderProducts(filteredProducts);

  if (filteredProducts.length > 0) {
    resultsInfo.textContent = `Знайдено товарів: ${filteredProducts.length}`;
  } else {
    resultsInfo.textContent = "За вашим запитом товарів не знайдено.";
  }
}



loadCart();
updateCartCount();
filterAndRender();

searchInput.addEventListener("input", filterAndRender);
categoryFilter.addEventListener("change", filterAndRender);
minPriceInput.addEventListener("input", filterAndRender);
