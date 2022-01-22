const title = document.querySelector('title');

const pizzaBg = document.getElementById('nav-pizza');
const beersBg = document.getElementById('nav-beers');
const burgersBg = document.getElementById('nav-burgers');
const dessertsBg = document.getElementById('nav-desserts');
const reservationsBg = document.getElementById('nav-reservations');

if(title.innerText === 'Food Court -Pizza'){
  pizzaBg.style.backgroundColor = 'rgb(0, 177, 0)';
  pizzaBg.style.color = 'rgb(255,255,255)';
  pizzaBg.style.pointerEvents = 'none !important';
  pizzaBg.style.cursor = 'default';
  pizzaBg.parentElement.href = '#';
}
if(title.innerText === 'Food Court -Desserts'){
  dessertsBg.style.backgroundColor = 'rgb(0, 177, 0)';
  dessertsBg.style.color = 'rgb(255,255,255)';
  dessertsBg.style.pointerEvents = 'none !important';
  dessertsBg.style.cursor = 'default';
  dessertsBg.parentElement.href = '#';
}
if(title.innerText === 'Food Court -Burgers'){
  burgersBg.style.backgroundColor = 'rgb(0, 177, 0)';
  burgersBg.style.color = 'rgb(255,255,255)';
  burgersBg.style.pointerEvents = 'none !important';
  burgersBg.style.cursor = 'default';
  burgersBg.parentElement.href = '#';
}
if(title.innerText === 'Food Court -Beers'){
  beersBg.style.backgroundColor = 'rgb(0, 177, 0)';
  beersBg.style.color = 'rgb(255,255,255)';
  beersBg.style.pointerEvents = 'none !important';
  beersBg.style.cursor = 'default';
  beersBg.parentElement.href = '#';
  document.querySelectorAll('.item__card-food').forEach(division => {
    division.style.display = 'none';
  });
}

// ===================== Counter Buttons =================
const AllMinus = document.querySelectorAll(".minus");
const AllPlus = document.querySelectorAll(".plus");
AllMinus.forEach((minus) => {
  minus.addEventListener("click", (event) => {
    let qty = minus.nextElementSibling.innerHTML;
    if (qty > 0) {
      minus.nextElementSibling.innerHTML = --qty;
    }
  });
});
AllPlus.forEach((plus) => {
  plus.addEventListener("click", (event) => {
    let qty = plus.previousElementSibling.innerHTML;
    if (qty < 7) {
      plus.previousElementSibling.innerHTML = ++qty;
    }
  });
});



// ========================= food type ==============
const foodType = document.querySelectorAll('.item__card-type');

foodType.forEach(food => {
  if(food.innerText === 'Veg'){
    food.previousElementSibling.style.backgroundColor = 'rgb(0, 177, 0)';
  }
  else{
    food.previousElementSibling.style.backgroundColor = 'rgb(226, 47, 41)';
  }
})