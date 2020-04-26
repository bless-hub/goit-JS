const ADMIN_PASSWORD = "jqueryismyjam";
let userPassword = prompt("password", "");
if (userPassword === ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
} else if (userPassword == "" || userPassword == null) {
  alert("Отменено пользователем!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}
