let getName = prompt("Lutfen adinizi giriniz");
let yourName = document.querySelector("#myName");

if (typeof getName === "string" && getName.length != 0) {
  yourName.innerHTML = `${getName[0].toUpperCase()}${getName.slice(1).toLowerCase()}`;
} 
else {
  alert("gecerli bir isim giriniz");
}

// Days section
let time = new Date().getDay();
let day = document.querySelector("#myDay");
let days;

switch (time) {
  case 1:
    days = "Pazartesi";
    break;
  case 2:
    days = "Salı";
    break;
  case 3:
    days = "Çarşamba";
    break;
  case 4:
    days = "Perşembe";
    break;
  case 5:
    days = "Cuma";
    break;
  case 6:
    days = "Cumartesi";
    break;
  case 7:
    days = "Pazar";
    break;
}
day.textContent = `${days}`;

// Clock section
setInterval(function () {
  const clock = new Date().toTimeString().slice(0, 8);
  myClock.textContent = clock;
}, 1);
