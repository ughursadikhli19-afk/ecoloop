import { products } from "../../api/api.js";

const productsElement = document.querySelector(".products");

function renderProducts(listOfProducts) {
  productsElement.innerHTML = listOfProducts
    .map((product) => {
      const classForAddToFavorite = product.addedToFavorite
        ? "bi bi-heart-fill addToFavorite"
        : "bi bi-heart addToFavorite";

      return `
<article class="product">
<i class="${classForAddToFavorite}" data-product-id="${product.id}"></i>
<div class="imgBox">
  <img src="${product.imageUrl}" alt="${product.title}">
</div>
<div class="info">
<p class="price">${product.price} AZN</p>
<p class="description">${product.description}</p>
</div>
<div class="addToCardBtn" data-product-id="${product.id}">
<button>add to cart</button>
</div>
</article>
`;
    })
    .join("");

  // addProductToCart();
  addToFavoriteFeature();
}

renderProducts(products);

function sortedProducts() {
  const sortProductSelect = document.querySelector(".sortProductSelect");
  sortProductSelect.addEventListener("change", (e) => {
    let sortedproducts = [...products];
    if (e.target.value === "ascprice") {
      sortedproducts.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "descprice") {
      sortedproducts.sort((a, b) => b.price - a.price);
    }
    renderProducts(sortedproducts);
  });
}

sortedProducts();

function searchProducts() {
  const searchForm = document.querySelector(".searchForm");
  const searchInput = document.querySelector(".searchInput");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const filteredProducts = products.filter((product) =>
      product.description
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    );
    renderProducts(filteredProducts);
  });
}

searchProducts();

function addFilterProductsbyCategory() {
  let categories = products.map((p) => p.category);
  categories = [...new Set(categories)];
  console.log(categories);

  const categoriesList = document.querySelector(".categoriesList");

  categories.forEach((category) => {
    const li = document.createElement("li");
    li.classList.add("category");
    li.textContent = category;
    li.addEventListener("click", () => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      renderProducts(filteredProducts);
    });
    categoriesList.appendChild(li);
  });
}
addFilterProductsbyCategory();

function allProductsBtn() {
  const allProductsBtn = document.querySelector(".allProductsBtn");
  allProductsBtn.addEventListener("click", () => {
    renderProducts(products);
  });
}
allProductsBtn();

function addFilterProductsbyBrands() {
  let brands = products.map((p) => p.brand);
  brands = [...new Set(brands)];
  console.log(brands);

  const brandsList = document.querySelector(".brandsList");

  brands.forEach((brand) => {
    const li = document.createElement("li");
    li.classList.add("brand");
    li.textContent = brand;
    li.addEventListener("click", () => {
      const filteredProducts = products.filter(
        (product) => product.brand === brand
      );
      renderProducts(filteredProducts);
    });
    brandsList.appendChild(li);
  });
}
addFilterProductsbyBrands();

function addToFavoriteFeature() {
  const addToFavoriteIconsList = document.querySelectorAll(".addToFavorite");

  addToFavoriteIconsList.forEach((icon) => {
    icon.addEventListener("click", () => {
      products.forEach((p) => {
        if (p.id === Number(icon.dataset.productId)) {
          p.addedToFavorite = !p.addedToFavorite;
        }
      });
      renderProducts(products);
      console.log(products);
    });
  });
}
addToFavoriteFeature();
