function initializeModalWindow() {
    "use strict";
    var counter = 0;
    for (counter = 0; counter < document.getElementsByClassName("modal-window-caller").length; counter++)
        document.getElementsByClassName("modal-window-caller")[counter].addEventListener("click", showModalWindow, true);
}
function showModalWindow() {
    "use strict";
    //В переменной содержится ссылка на DOM-элемент, который выполняет роль модального окна;
    var ModalWindow = document.getElementById("modal-window");
    //В переменной содержится ссылка на DOM-элемент, который выполняет роль заднего фона;
    var Background = document.getElementById("background");
    //Длительность анимации;
    var duration = 500;
    if (!ModalWindow.hasAttribute("data-animation-indicator")) {
        //Установка атрибута-заглушки на время выполнения анимации;
        ModalWindow.setAttribute("data-animation-indicator", true);
        //Добавление класса "active-modal-window" к DOM-элементу, который выполняет роль модального окна. Этот класс
        //необходим для определения текущего активного модального окна;
        if (ModalWindow.className.length) ModalWindow.className = ModalWindow.className + " ";
        ModalWindow.className = ModalWindow.className + "active-modal-window";
        if (window.getComputedStyle(ModalWindow, "").display === "none") ModalWindow.style.display = "block";
        if (window.getComputedStyle(Background, "").display === "none") Background.style.display = "block";
        opacityAnimationCall(Background, duration, 1);
        opacityAnimationCall(ModalWindow, duration, 1);
        window.setTimeout(function() {
            document.addEventListener("click", closeModalWindow, true);
            if (ModalWindow.hasAttribute("data-animation-indicator"))
                ModalWindow.removeAttribute("data-animation-indicator");
        }, duration + 50);
    }
}
function showMessageBox() {
    "use strict";
    //В переменной содержится ссылка на DOM-элемент, который выполняет роль модального окна;
    var MessageBox = document.getElementById("modal-window-message");
    //Длительность анимации;
    var duration = 500;
    if (window.getComputedStyle(MessageBox, "").display === "none") MessageBox.style.display = "block";
    if (MessageBox.className.length) MessageBox.className = MessageBox.className + " ";
    MessageBox.className = MessageBox.className + "active-modal-window";
    //Показ DOM-элемента, который выполняет роль модального окна, и в котором выводится сообщение-ответ от обработчика;
    opacityAnimationCall(MessageBox, duration, 1);
    window.setTimeout(function() {
        document.addEventListener("click", closeModalWindow, true);
    }, duration + 50);
}
function closeModalWindow(event) {
    "use strict";
    event = event || window.event;
    //DOM-элемент, на который нажал пользователь;
    var Element = event.target;
    //В переменной содержится ссылка на DOM-элемент, который выполняет роль модального окна;
    var ModalWindow = document.getElementsByClassName("active-modal-window")[0];
    //В переменной содержится ссылка на DOM-элемент, который выполняет роль заднего фона;
    var Background = document.getElementById("background");
    //Шаблон для регулярных выражений;
    var pattern = /\s*modal-window-button\s*/ig;
    //Длительность анимации;
    var duration = 500;
    //Индикатор, который указывает на то, найден ли DOM-элемент, который выполняет роль модального окна;
    var indicator = false;
    //Индикатор, который указывает на то, нажал ли пользователь на кнопки, которые отвечают за сокрытие модального окна и которые
    //находятся внутри DOM-элемента, который выполняет роль модального окна;
    var additoryIndicator = false;
    //Если пользователь нажал на кнопку закрытия модального окна;
    if (Element.hasAttribute("class") && pattern.test(Element.className)) additoryIndicator = true;
    pattern = /\s*active-modal-window\s*/ig;
    //Если пользователь нажал не на модальное окно;
    if (!Element.hasAttribute("class") || !pattern.test(Element.className)) {
        //Поиск DOM-элемента, на который нажал пользователь;
        if (!additoryIndicator)
            while (!indicator && Element.nodeName !== "BODY") {
                if (Element.parentNode !== null) Element = Element.parentNode;
                else Element = ModalWindow;
                //Если найден DOM-элемент, который выполняет роль модального окна, переменной "indicator" присваивается значение "true".
                //Это означает, что пользователь нажал на один из элементов, который находится внутри модального окна;
                if (Element.nodeName === "DIV" && pattern.test(Element.className)) indicator = true;
            }
        //Если пользователь нажал не на активное модальное окно;
        if (!indicator || additoryIndicator) {
            if (!ModalWindow.hasAttribute("data-animation-indicator")) {
                //Установка атрибута-заглушки на время выполнения анимации;
                ModalWindow.setAttribute("data-animation-indicator", true);
                opacityAnimationCall(ModalWindow, duration, 0);
                opacityAnimationCall(Background, duration, 0);
                window.setTimeout(function() {
                    //Удаление атрибута-заглушки, который указывает, что в данный момент для выбранного DOM-элемента
                    //выполняется анимация;
                    if (ModalWindow.hasAttribute("data-animation-indicator")) ModalWindow.removeAttribute("data-animation-indicator");
                    clearStyleAttribute(Background);
                    clearStyleAttribute(ModalWindow);
                    //Удаление класса, наличие которого свидетельствует о том, что модальное окно активно;
                    clearClassAttribute(ModalWindow);
                    document.removeEventListener("click", closeModalWindow, true);
                }, duration + 50);
            }
        }
    }
}
function clearStyleAttribute(Element) {
    "use strict";
    var pattern = /\s*(display:\s*block;\s*)|(opacity:\s*[0-9](\.[0-9])*;\s*)/ig;
    if (Element.hasAttribute("style"))
        if (pattern.test(Element.getAttribute("style"))) {
            Element.setAttribute("style", Element.getAttribute("style").replace(new RegExp(pattern), ""));
            if (!Element.getAttribute("style").length) Element.removeAttribute("style");
        }
}
function clearClassAttribute(Element) {
    "use strict";
    var pattern = /\s*active-modal-window\s*/;
    if (pattern.test(Element.className)) {
        Element.className = Element.className.replace(new RegExp(pattern), "");
        if (!Element.className.length) Element.removeAttribute("class");
    }
}