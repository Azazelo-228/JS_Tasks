// Условие:Запросите у пользователя его текстовую роль в системе: "admin", "manager", "guest".
// Используйте switch для проверки роли.Внутри кейса "admin" добавьте проверку через
// prompt: запросите секретный пароль (например, число 1234).
// С помощью if / else проверьте пароль (не забудьте про + перед prompt и проверку isNaN).
// Если пароль верный — выведите "Доступ разрешен", если нет или введены буквы — "Неверный пароль".
// Для "manager" выведите "Доступ к панели заказов".Для "guest" выведите "Доступ только для чтения".
// В default ветке switch обработайте ситуацию, если роль введена неверно.

// let role = prompt("Enter your role (admin/user):");

// switch (role) {
//   case "admin":
//     let adminPassword = +prompt("Enter your admin password:");
//     if (adminPassword === 1234 && !isNaN(adminPassword)) {
//       alert("Access granted.");
//     } else {
//       alert("Invalid admin password.");
//     }
//     break;
//   case "manager":
//     alert("Доступ к панели заказов");
//     break;
//   case "guest":
//     alert("Доступ только для чтения");
//     break;
//   default:
//     alert("Invalid role.");
// }







// Условие:Запросите у пользователя номер месяца (число от 1 до 12).
// Проверьте ввод на NaN и диапазон от 1 до 12 через if.Используя switch,
// сгруппируйте кейсы (помните, что case можно писать один за другим без break,
//   чтобы они выполняли одно действие) и выведите в alert время года:12, 1, 2 — "Зима".
//   3, 4, 5 — "Весна".6, 7, 8 — "Лето".9, 10, 11 — "Осень".

let month = +prompt("Введите месяц (1-12):");

if (isNaN(month) || month < 1 || month > 12) {
  alert("Введите корректный номер месяца (1-12).");
} else {
  switch (month) {
    case 12:
    case 1:
    case 2:
      alert("Зима");
      break;
    case 3:
    case 4:
    case 5:
      alert("Весна");
      break;
    case 6:
    case 7:
    case 8:
      alert("Лето");
      break;
    case 9:
    case 10:
    case 11:
      alert("Осень");
      break;
  }
}
