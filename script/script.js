var fingerNumber = prompt("Введіть номер пальця на руці (1-5):");


if (fingerNumber === "1") {
  alert("Великий палець");
} else if (fingerNumber === "2") {
  alert("Вказівний палець");
} else if (fingerNumber === "3") {
  alert("Середній палець");
} else if (fingerNumber === "4") {
  alert("Безіменний палець");
} else if (fingerNumber === "5") {
  alert("Мізинець");
} else {
  alert("Невірний номер пальця. Введіть число від 1 до 5.");
}