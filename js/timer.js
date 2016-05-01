function initializeTimers() {
    "use strict";
    var counter = 0;
    for (counter = 0; counter < document.getElementsByClassName("timer").length; counter++)
        startTimer(document.getElementsByClassName("timer")[counter], "2016-01-26", 2);
}
function calculateDaysAmount(initialDate) {
    return (new Date() - new Date(initialDate)) / 3600000;
}
function processNumber(number) {
    if (number < 10)
        number = "0" + number.toString();
    else
        number = number.toString();
    return number;
}
function startTimer(Timer, initialDate, shareDuration) {
    "use strict";
    var initialYear = initialDate.split('-')[0];
    var initialMonth = initialDate.split('-')[1];
    var initialDay = initialDate.split('-')[2];
    var initialHour = 24;
    var interval = window.setInterval(function () {
        //Определение текущих даты и времени;
        var currentDate = new Date();
        //Дополнительная переменная;
        var variable = 0;
        var resetsAmount = Math.floor(calculateDaysAmount(new Date(initialYear, initialMonth - 1, initialDay - 1, initialHour)) / shareDuration);
        var endingDate = new Date(initialYear, initialMonth - 1, initialDay - 1, initialHour + (resetsAmount + 1) * shareDuration);
        var deviation = endingDate - currentDate;
        //Определение количества дней, которое осталось до "обнуления" таймера;
        variable = parseInt(deviation / 86400000);
        Timer.getElementsByClassName("days")[0].innerHTML = processNumber(variable);
        //Определение количества часов, которое осталось до "обнуления" таймера;
        variable = parseInt(deviation / 3600000) % 24;
        Timer.getElementsByClassName("hours")[0].innerHTML = processNumber(variable);
        //Определение количества минут, которое осталось до "обнуления" таймера;
        variable = parseInt(deviation / 60000) % 60;
        Timer.getElementsByClassName("minutes")[0].innerHTML = processNumber(variable);
        //Определение количества минут, которое осталось до "обнуления" таймера;
        variable = parseInt(deviation / 1000) % 60;
        Timer.getElementsByClassName("seconds")[0].innerHTML = processNumber(variable);
    }, 1000);
    Timer.setAttribute("data-interval", interval);
}