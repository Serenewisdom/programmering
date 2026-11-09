// JS Steg 1: Mock-data
const products = [
  { name: "Hörlurar", category: "Elektronik", price: 1000, icon: "🎧" },
  { name: "Hoodie", category: "Kläder", price: 500, icon: "👕" },
  { name: "Tangentbord", category: "Elektronik", price: 1500, icon: "⌨️" },
  { name: "Keps", category: "Kläder", price: 200, icon: "🧢" },
  { name: "Gamingmus", category: "Elektronik", price: 600, icon: "🖱️" },
];

// JS Steg 2: Anropa ID
const productsContainer = document.getElementById("product-container");
const categorySelect = document.getElementById("filter-category");
const sortSelect = document.getElementById("sort-price");
const discountBtn = document.getElementById("btn-discount");

let hasDiscount = false;

//JS Steg 6: Flytta in filter från eventlistener till separat funktion
const updateList = () => {
  //JS Steg 5: Hantera arrays utan att ändra originalet
  let result = [...products];

  result = result.filter((item) => {
    if (
      categorySelect.value === item.category ||
      categorySelect.value === "Alla"
    ) {
      return true;
    }
  });

  //Steg 7 gör nästa eventListener som privat funktion

  if (sortSelect.value === "low-high") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high-low") {
    result.sort((a, b) => b.price - a.price);
  }

  //Steg 8 Fixa discount button
  if (hasDiscount) {
    result = result.map((item) => {
      return {
        name: item.name,
        category: item.category,
        price: item.price * 0.8,
        icon: item.icon,
      };
    });
  }

  render(result);
};

// JS Steg 4: Börja bygga logiken bakom korten

const render = (result) => {
  productsContainer.innerHTML = "";
  result.forEach((product) => {
    /* console.log(product) */
    const card = document.createElement("div");
    card.className = "product-card";

    /* För varje produkt, skapa ett html-element (Card) 
    som i sin tur kommer in i förälder-elementet som vi targetade */
    card.innerHTML = `
        <div class="product-icon">${product.icon}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-price">${product.price}</div>
        `;

    productsContainer.appendChild(card);
  });
};

// JS Steg 3: Sätta upp eventlisteners, lyssnare till ändringar i fälten
//JS Steg 4: Kontrollera så att allt funkar med console.log
/* console.log("Kategori funkar"); inuti eventListeners */
/* console.log("Sortering funkar"); */
/* console.log("Rabatt funkar"); */

categorySelect.addEventListener("change", updateList);
sortSelect.addEventListener("change", updateList);
discountBtn.addEventListener("click", () => {
  hasDiscount = !hasDiscount;

  discountBtn.textContent = hasDiscount
    ? "Stäng av rabatt"
    : "Aktivera 20% rabatt";

  updateList();
});

updateList();
