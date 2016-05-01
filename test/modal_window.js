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
        //Установка атрибута-заглушки, которая указывает на то, что данное модальное окно активно в текущий момент.
        //Этот атрибут необходим для определения необходимости сокрытия модального окна;
        document.body.setAttribute("data-active", true);
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
function closeModalWindow(event) {
    "use strict";
    event = event || window.event;
    //DOM-элемент, на который нажал пользователь;
    var Element = event.target;
    //В переменной содержится ссылка на DOM-элемент, который выполняет роль модального окна;
    var ModalWindow = document.getElementById("modal-window");
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
    pattern = /\s*modal-window\s*/ig;
    //Если пользователь нажал не на модальное окно;
    if (!Element.hasAttribute("id") || !pattern.test(Element.id)) {
        //Поиск DOM-элемента, на который нажал пользователь;
        if (!additoryIndicator)
            while (!indicator && Element.nodeName !== "BODY") {
                if (Element.parentNode !== null) Element = Element.parentNode;
                else Element = ModalWindow;
                //Если найден DOM-элемент, который выполняет роль модального окна, переменной "indicator" присваивается значение "true".
                //Это означает, что пользователь нажал на один из элементов, который находится внутри модального окна;
                if (Element.nodeName === "DIV" && pattern.test(Element.id)) indicator = true;
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
                    if (document.body.hasAttribute("data-active")) document.body.removeAttribute("data-active");
                    clearStyleAttribute(Background);
                    clearStyleAttribute(ModalWindow);
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