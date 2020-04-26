let credits = 23580;
let pricePerDroid = 3000;
let answear = prompt("Выберите кол-во", 0),
  totalPrice = +answear * pricePerDroid;
if (answear == null || answear == "") {
  alert("Отменено пользователем!");
} else if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else if (totalPrice <= credits);
alert(
  `Вы купили ${answear} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов`
);
