// mock-data

const products = [
  { name: "Hörlurar", category: "Elektronik", price: 1000, icon: "🎧" },
  { name: "Hoodie", category: "Kläder", price: 500, icon: "👕" },
  { name: "Tangentbord", category: "Elektronik", price: 1500, icon: "⌨️" },
  { name: "Keps", category: "Kläder", price: 200, icon: "🧢" },
  { name: "Gamingmus", category: "Elektronik", price: 600, icon: "🖱️" },
];

const productsContainer = document.getElementById("product-container");
const categorySelect = document.getElementById("filter-category");
const sortSelect = document.getElementById("sort-price");
const discountBtn = document.getElementById("btn-discount");

const updateList = () => {
  //logik för att uppdatera listan
  let result = [...products];

  //1. FILTER
  result = result.filter((item) => {
    return (
      categorySelect.value === item.category || categorySelect.value === "Alla"
    );
  });

  // 2. SORT
  if (sortSelect.value === "low-high") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high-low") {
    result.sort((a, b) => b.price - a.price);
  }

  render(result);
};

const render = (result) => {
  productsContainer.innerHTML = "";

  result.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <div class="product-icon">${product.icon}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-price">${product.price}</div>
        `;
    productsContainer.appendChild(card);
  });
};

//Lyssnare till ändringar i fälten

categorySelect.addEventListener("change", updateList);
sortSelect.addEventListener("change", updateList);
discountBtn.addEventListener("click", updateList);

/* categorySelect.addEventListener("change", () => {
  console.log("Här har ändrats till:", categorySelect.value);
});

sortSelect.addEventListener("change", () => {
  console.log("Här har ändrats till:", sortSelect.value);
}); */

updateList();
