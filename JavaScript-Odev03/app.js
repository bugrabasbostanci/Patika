const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://omnivorescookbook.com/wp-content/uploads/2017/04/2002_Dan-Dan-Noodles_001.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
// Butonları oluşturma işlemi
let buttonContainer = document.querySelector(".btn-container");
let buttonValues = [...new Set(menu.map((item) => item.category))];
buttonValues.unshift("All");

buttonValues.forEach((value) => {
  let button = document.createElement("button");
  button.classList.add("btn", "btn-outline-dark", "btn-item");
  buttonContainer.append(button);
  button.innerText = value;
  button.setAttribute("id", value);
  button.addEventListener("click", showMenu);
});

// İçerik gösterme fonksiyonu
function showMenu(event) {
  const buttonId = event.target.id;
  const menuItems = document.querySelectorAll(".menu-items");

  menuItems.forEach((item) => {
    const itemCategory = menu.filter(
      (menuItem) =>
        menuItem.title === item.querySelector(".menu-title h4").innerText
    )[0].category;
    console.log(itemCategory);
    if (buttonId === "All" || buttonId === itemCategory) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// İçerikleri oluşturma işlemi
let contentContainer = document.querySelector(".section-center");

menu.forEach((item) => {
  let contents = document.createElement("div");
  contents.classList.add("menu-items", "col-lg-6", "col-sm-12");
  contentContainer.append(contents);
  contents.innerHTML = `
    <img src="${item.img}" class="photo" alt="${item.title}" >
    <div class="menu-info">
        <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu text">${item.desc}</div>
    </div>
    `;
});
