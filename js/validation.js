function validation(Element) {
    //Счётчик, который используется для поиска всех текстовых полей в элементе "Element";
    var counter = 0;
    //Шаблон для регулярного выражения;
    var pattern = /.?/;
    //Текущее текстовое поле;
    var TextField = new Object();
    //Переменная, в которой сохраняется значение нечётного текстового поля с типом проверки ("data-type") "3". Это поле считается эталоном. На совпадение проверяются каждые два
    //поля с типом проверки "3";
    var number = -1;
    //Индикатор отсутствия ошибок;
    var errorIndicator = true;
    for (counter = 0; counter < Element.getElementsByTagName("input").length; counter++)
        if (Element.getElementsByTagName("input")[counter].type !== "hidden" && Element.getElementsByTagName("input")[counter].type !== "submit" && Element.getElementsByTagName("input")[counter].type !== "checkbox") {
            pattern = /\s*error\s*/;
            TextField = Element.getElementsByTagName("input")[counter];
            //Проверка на заполнение текстового поля (производится для всех текстовых полей в элементе "Element");
            if (!TextField.value.length && !pattern.test(TextField.className))
                messageOutput(Element, TextField, "Обязательное поле.");
            //Если в нечётном по порядку следования (первом) текстовом поле с типом проверки "3" обнаружена ошибка, а в чётном текстовом поле с типом проверки "3" уже есть
            //сообщение об ошибке, это сообщение необходимо удалить;
            if (parseInt(TextField.getAttribute("data-type")) === 3)
                //Если переменная имеет значение "-1", текущее текстовое поле с типом проверки "3" нечётное по порядку следования и считается эталоном для проверки;
                if (number < 0)
                    number = counter;
                else
                //Удаление сообщения об ошибке. Если в обоих текстовых полях выведены сообщения об ошибках, значения "value" этих текстовых полей пустые, информация, которую
                //ввёл пользователь, содержится в атрибутах "data-content";
                if (pattern.test(TextField.className) && TextField.getAttribute("data-content").length && !Element.getElementsByTagName("input")[number].getAttribute("data-content").length) {
                    //Обновление текстового поля;
                    textFieldRefresh(TextField);
                    number = -1;
                }
            //Второй тип проверки текстового поля производится только в том случае, если это поле имеет атрибут "data-type";
            if (!pattern.test(TextField.className) && TextField.hasAttribute("data-type")) {
                //Тип валидации текстового поля определяется значением атрибута "data-type";
                switch (parseInt(TextField.getAttribute("data-type"))) {
                    case 0:
                        pattern = /^[a-zа-я\s]{3,}$/ig;
                        if (!pattern.test(TextField.value))
                            messageOutput(Element, TextField, "Неправильно!");
                        break;
                    case 1:
                        pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
                        if (!pattern.test(TextField.value))
                            messageOutput(Element, TextField, "Неправильно!");
                        break;
                    case 2:
                        pattern = /^((([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6})|(admin))$/i;
                        if (!pattern.test(TextField.value))
                            messageOutput(Element, TextField, "Неправильно!");
                        break;
                    default:
                        break;
                }
            }
            //Если информация хотя бы в одном текстовом поле содержит ошибку, форма не должна отправляться на сервер. О наличии ошибки свидетельствует наличие класса
            //"error" хотя бы у одного текстового поля;
            pattern = /\s*error\s*/;
            if (pattern.test(TextField.className))
                if (errorIndicator)
                    errorIndicator = false;
        }
    //Проверка текстовых полей типа "textarea";
    pattern = /\s*error\s*/;
    for (counter = 0; counter < Element.getElementsByTagName("textarea").length; counter++) {
        TextField = Element.getElementsByTagName("textarea")[counter];
        if (!TextField.value.length && !pattern.test(TextField.className))
            messageOutput(Element, TextField, "Обязательное поле.");
        if (pattern.test(TextField.className))
            if (errorIndicator)
                errorIndicator = false;
    }
    return errorIndicator;
}

function messageOutput(Element, TextField, message) {
    "use strict";
    var AdditoryElement = new Object();
    var placeholderWidth = 0;
    var textFieldWidth = 0;
    if (TextField.className.length)
        TextField.className = TextField.className + " ";
    //Сохранение подсказки, которая находилась в текстовом поле до вывода сообщения об ошибке;
    if (TextField.hasAttribute("placeholder"))
        TextField.setAttribute("data-placeholder", TextField.getAttribute("placeholder"));
    //Сохранение информации, которую пользователь ввёл в текстовое поле; 
    TextField.setAttribute("data-content", TextField.value);
    TextField.value = "";
    //Определение ширины сообщения об ошибке, которое выводится в "placeholder" (ширина определяется через ввод дополнительного блока "span");
    AdditoryElement = document.createElement("span");
    AdditoryElement.className = "additoryclass";
    AdditoryElement.innerHTML = message;
    Element.appendChild(AdditoryElement);
    placeholderWidth = parseFloat(AdditoryElement.offsetWidth);
    Element.removeChild(AdditoryElement);
    //Вывод сообщения об ошибке;
    TextField.setAttribute("placeholder", message);
    TextField.className = TextField.className + "error";
    //Добавление блока с изображением восклицательного знака;
    Image = document.createElement("div");
    Image.className = "error";
    Element.appendChild(Image);
    if (TextField.nodeName === "INPUT")
        Image.style.top = TextField.offsetTop + (parseFloat(window.getComputedStyle(TextField).height) - Image.offsetHeight) / 2 + 4 + "px";
    else
        Image.style.top = TextField.offsetTop + 1 + "px";
    Image.style.left = TextField.offsetLeft + parseFloat(window.getComputedStyle(TextField).width) - Image.offsetWidth - 4 + "px";
    Image.setAttribute("data-reference", TextField.getAttribute("name"));
    //Динамическое изменение размера шрифта сообщения об ошибке. Применяется в том случае, если ширина сообщения об ошибке, которая хранится в переменной "placeholderWidth",
    //больше, чем ширина текстового поля ("textFieldWidth");
    textFieldWidth = parseFloat(window.getComputedStyle(TextField, "").width) - parseFloat(Image.offsetWidth) - parseFloat(window.getComputedStyle(TextField, "").textIndent) - 3;
    if (placeholderWidth > textFieldWidth)
        TextField.style.fontSize = textFieldWidth * parseFloat(window.getComputedStyle(TextField, "").fontSize) / placeholderWidth + "px";
    TextField.addEventListener("focus", refresh, false);
    Image.addEventListener("click", refresh, false);
}

/**
 * @author = Mikhail Dumchev;
 * Функция выполняет роль обработчика, в котором вызывается функция для удаления сообщений об ошибках в текстовом поле, на которое нажал пользователь;
 * @param {object} event Объект события, в котором содержится информация об этом событии;
 */
function refresh(event) {
    "use strict";
    event = event || window.event;
    //Объект "TextField" - текстовое поле, с которым в данный момент взаимодействует пользователь;
    var TextField = event.target;
    //Обновление текстового поля;
    TextField = textFieldRefresh(TextField);
    TextField.focus();
}

/**
 * @author = Mikhail Dumchev;
 * Функция удаляет сообщение об ошибке в текстовом поле;
 * @param {object} TextField Текстовое поле либо блок с изображением восклицательного знака, который относится к определённому текстовому полю;
 */
function textFieldRefresh(TextField) {
    "use strict";
    //Счётчик, который используется для поиска текстового поля в том случае, если пользователь нажал на изображение восклицательного знака;
    var counter = 0;
    //Индикатор, который указывает на то, было ли найдено текстовое поле, к которому относится блок с изображением восклицательного знака, при поиске среди элементов типа "input";
    var additoryIndicator = false;
    //Шаблон для регулярных выражений (проверка на наличие класса "error" у текстового поля);
    var pattern = /\s*error\s*/;
    //Объект "Container" - форма, которая является родителем текстового поля;
    var Container = TextField.parentNode;
    while (Container.nodeName !== "FORM" && Container.nodeName !== "BODY")
        Container = Container.parentNode;
    //Пользователь может нажать на текстовое поле или на на блок с изображением восклицательного знака;
    if (TextField.nodeName === "TEXTAREA" || TextField.nodeName === "INPUT") {
        for (counter = 0; counter < Container.getElementsByTagName("div").length; counter++)
            if (pattern.test(Container.getElementsByTagName("div")[counter].className) && Container.getElementsByTagName("div")[counter].getAttribute("data-reference") === TextField.getAttribute("name")) {
                //Удаление блока с изображением восклицательного знака;
                Container.getElementsByTagName("div")[counter].removeEventListener("click", refresh, false);
                Container.removeChild(Container.getElementsByTagName("div")[counter]);
            }
    } else {
        //Поиск ведётся до тех пор, пока не будут проверены все текстовые поля, которые находятся в форме "Container", или не будет найдено
        //текстовое поле, к которому относится блок с изображением восклицательного знака, на который нажал пользователь;
        for (counter = 0; counter < Container.getElementsByTagName("input").length; counter++)
            if (pattern.test(Container.getElementsByTagName("input")[counter].className) && Container.getElementsByTagName("input")[counter].getAttribute("name") === TextField.getAttribute("data-reference")) {
                //Удаление обработчика события у блока с изображением восклицательного знака;
                TextField.removeEventListener("click", refresh, false);
                //Удаление блока с изображением восклицательного знака (на данном этапе в переменной "TextField" содержится блок с изображением восклицательного знака);
                Container.removeChild(TextField);
                //В переменную "TextField" заносится ссылка на текстовое поле, к которому относился блок с изображением восклицательного знака;
                TextField = Container.getElementsByTagName("input")[counter];
                //Текстовое поле, к которому относится блок с изображением восклицательного знака, найдено;
                additoryIndicator = true;
            }
        //Если текстовое поле не было найдено среди элементов типа "input", его нужно искать среди элементов типа "textarea";
        if (!additoryIndicator)
            for (counter = 0; counter < Container.getElementsByTagName("textarea").length; counter++)
                if (pattern.test(Container.getElementsByTagName("textarea")[counter].className) && Container.getElementsByTagName("textarea")[counter].getAttribute("name") === TextField.getAttribute("data-reference")) {
                    TextField.removeEventListener("click", refresh, false);
                    //Удаление блока с изображением восклицательного знака (на данном этапе в переменной "TextField" содержится блок с изображением восклицательного знака);
                    Container.removeChild(TextField);
                    //В переменную "TextField" заносится ссылка на текстовое поле, к которому относился блок с изображением восклицательного знака;
                    TextField = Container.getElementsByTagName("textarea")[counter];
                }
    }
    if (pattern.test(TextField.className)) {
        //В атрибуте "data-content" содержится значение, которое было введено пользователем, но не прошло проверку. При скрытии сообщения об ошибке необходимо
        //восстановить это значение;
        if (TextField.hasAttribute("data-content")) {
            TextField.value = TextField.getAttribute("data-content");
            TextField.removeAttribute("data-content");
        } else
            TextField.value = "";
        //В атрибуте "data-placeholder" содержится начальное значение подсказки;
        if (TextField.hasAttribute("data-placeholder")) {
            TextField.setAttribute("placeholder", TextField.getAttribute("data-placeholder"));
            TextField.removeAttribute("data-placeholder");
        } else
            TextField.setAttribute("placeholder", "");
        //Удаление класса "error";
        TextField.className = TextField.className.replace(new RegExp(pattern), "");
        if (!TextField.className.length)
            TextField.removeAttribute("class");
        //Удаления свойства "font-size". Согласно логике работы функции "messageOutput()" в это свойство заносится значение в том случае, если ширина сообщения об
        //ошибке больше, чем ширина текстового поля;
        if (TextField.hasAttribute("style")) {
            pattern = /\s*font-size:\s*[0-9]+(\.[0-9]+){0,1}px;\s*/;
            if (pattern.test(TextField.getAttribute("style")))
                TextField.setAttribute("style", TextField.getAttribute("style").replace(new RegExp(pattern), ""));
            if (!TextField.getAttribute("style").length)
                TextField.removeAttribute("style");
        }
        TextField.removeEventListener("focus", refresh, false);
    }
    return TextField;
}