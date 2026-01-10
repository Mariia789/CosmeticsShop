 const products = [
  {
    id: 1,
    title: "Lipstick",
    price: 500,
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
