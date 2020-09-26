// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.//Напиши
// скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его текущее
//значение в span#name-output. Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.
document.addEventListener("DOMContentLoaded", () => {
  const inputRef = document.querySelector("#name-input");
  const nameInputRef = document.querySelector("#name-output");
  inputRef.addEventListener(
    "input",
    () =>
      (nameInputRef.textContent =
        inputRef.value === "" ? "Незнакомец" : inputRef.value)
  );
});
