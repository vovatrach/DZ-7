// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика
//  на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

document.addEventListener('DOMContentLoaded',() =>{
    const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
    console.log(btnDecrementRef);
    const btnIncrementRef = document.querySelector('button[data-action="increment"]');
    console.log(btnIncrementRef);
    const spanRef = document.querySelector("#value");
    console.log(spanRef);

    let counterValue = 0
    const increment = () => {
        counterValue+=1
        // console.log(counterValue)
        spanRef.textContent = counterValue

    };
    const decrement  = () => {
        counterValue-=1
        // console.log(counterValue)
        spanRef.textContent = counterValue

    };
    btnDecrementRef.addEventListener('click',decrement );
    btnIncrementRef.addEventListener('click', increment );
    // console.log(counterValue)
 });
