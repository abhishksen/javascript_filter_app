const data = [
    {
        id: 1,
        name: "IQOO Z5 5g",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 700,
        cat: "Electronics",
    },
    {
        id: 2,
        name: "Bridal Lehenga",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 300,
        cat: "Fashion",
    },
    {
        id: 3,
        name: "Men's Shirt",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 69,
        cat: "Fashion",
    },
    {
        id: 4,
        name: "Apple Macbook pro",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 130,
        cat: "Electronics",
    },
    {
        id: 5,
        name: "Samsung galaxy Z fold 4",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 999,
        cat: "Electronics",
    },
    {
        id: 6,
        name: "Black Burbon",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 30,
        cat: "Food",
    },
    {
        id: 7,
        name: "Iron Man Suit",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 309,
        cat: "Toys",
    },
    {
        id: 8,
        name: "Dark Chocolate",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 90,
        cat: "Food",
    },
    {
        id: 9,
        name: "Apple iphone 14 pro",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 250,
        cat: "Electronics",
    },
    {
        id: 10,
        name: "Pista Badam",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 300,
        cat: "Food",
    },

    // repeated data 

    {
        id: 1,
        name: "IQOO Z5 5g",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 150,
        cat: "Electronics",
    },
    {
        id: 2,
        name: "Bridal Lehenga",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 300,
        cat: "Fashion",
    },
    {
        id: 3,
        name: "Men's Shirt",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 30,
        cat: "Fashion",
    },
    {
        id: 4,
        name: "Apple Macbook pro",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 130,
        cat: "Electronics",
    },
    {
        id: 5,
        name: "Samsung galaxy Z fold 4",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 590,
        cat: "Electronics",
    },
    {
        id: 6,
        name: "Black Burbon",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 30,
        cat: "Food",
    },
    {
        id: 7,
        name: "Iron Man Suit",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 300,
        cat: "Toys",
    },
    {
        id: 8,
        name: "Dark Chocolate",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 90,
        cat: "Food",
    },
    {
        id: 9,
        name: "Apple iphone 14 pro",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 450,
        cat: "Electronics",
    },
    {
        id: 10,
        name: "Pista Badam",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 300,
        cat: "Food",
    },
    {
        id: 11,
        name: "Sport shoes",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 100,
        cat: "Sports",
    },
    {
        id: 12,
        name: "Sports T-shirt",
        image: "https://m.media-amazon.com/images/I/71mCphsCGZL._SY741_.jpg",
        price: 99,
        cat: "Sports",
    },
]

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(product =>
        `<div class="product">
        <img
          src=${product.image}
          alt="product image"
        />
        <span class="name">${product.name}</span>
        <span class="priceText">${product.price}</span>
      </div>`
    ).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
    } else {
        displayProducts(data);
    }
});

const setCategories = () => {
    const allCats = data.map(item => item.cat);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),
    ];

    categoriesContainer.innerHTML = categories.map(cat =>
        `<span class="cats">${cat}</span>`
    ).join("");

    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All"
            ? displayProducts(data)
            : displayProducts(data.filter(item => item.cat === selectedCat));
    });

};

const setPrices = () => {
    const pricelist = data.map((item) => item.price);
    const minPrice = Math.min(...pricelist);
    const maxPrice = Math.max(...pricelist);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value
        displayProducts(data.filter(item => item.price <= e.target.value));
    });

};

setCategories();
setPrices();
