// Напиши скрипт, который после нажатия кнопки Start,
// раз в секунду меняет цвет фона body на случайное значение
// из массива используя инлайн - стиль.При нажатии на кнопку
// Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное
// количество раз.Сделай так, чтобы пока изменение темы
// запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива
// цветов), используй функцию randomIntegerFromInterval.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const bodyRef = document.body;

let colorSwitchId = 0;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartClick() {
    startBtn.disabled = 'true';
    colorSwitchId = setInterval(() => {
        const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        bodyRef.style.backgroundColor = randomColor;
    }, 1000);
    console.log(colorSwitchId);
}

function onStopClick() {
    clearInterval(colorSwitchId);
    startBtn.removeAttribute('disabled');
}

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);
