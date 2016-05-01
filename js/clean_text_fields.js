function cleanTextFields() {
    "use strict";
    var counter = 0;
    var internalCounter = 0;
    var pattern = /\s*error\s*/;
    //Очистка текстовых полей и "checkbox"(-ов) (элементов с тегом "input");
    var TextFieldsList = document.getElementsByTagName("input");
    for (counter = 0; counter < TextFieldsList.length; counter++)
        if (TextFieldsList[counter].type !== "file" && TextFieldsList[counter].type !== "hidden" && TextFieldsList[counter].type !== "submit" && !TextFieldsList[counter].hasAttribute("readonly"))
            clean(TextFieldsList[counter], pattern);
    //Очистка текстовых полей (элементов с тегом "textarea");
    TextFieldsList = document.getElementsByTagName("textarea");
    for (counter = 0; counter < TextFieldsList.length; counter++)
        clean(TextFieldsList[counter], pattern);
    //Удаление блоков с изображением восклицательных знаков;
    var FormsList = document.getElementsByTagName("form");
    for (counter = 0; counter < FormsList.length; counter++) {
        TextFieldsList = FormsList[counter].getElementsByTagName("div");
        for (internalCounter = 0; internalCounter < TextFieldsList.length; internalCounter++)
            if (pattern.test(TextFieldsList[internalCounter].className) && TextFieldsList[internalCounter].hasAttribute("data-reference")) {
                TextFieldsList[internalCounter].removeEventListener("click", refresh, false);
                TextFieldsList[internalCounter].parentNode.removeChild(TextFieldsList[internalCounter]);
                internalCounter = internalCounter - 1;
            }
    }
}

function clean(TextField, pattern) {
    //Удаление класса "error";
    if (pattern.test(TextField.className))
        TextField.className = TextField.className.replace(new RegExp(pattern), "");
    if (!TextField.className.length)
        TextField.removeAttribute("class");
    //Удаление атрибута "data-content";
    if (TextField.hasAttribute("data-content"))
        TextField.removeAttribute("data-content");
    //Удаление атрибута "data-placeholder" и восстановление "placeholder";
    if (TextField.hasAttribute("data-placeholder")) {
        TextField.setAttribute("placeholder", TextField.getAttribute("data-placeholder"));
        TextField.removeAttribute("data-placeholder");
    }
    if (TextField.hasAttribute("style")) {
        pattern = /\s*font-size:\s*[0-9]+(\.[0-9]+){0,1}px;\s*/;
        if (pattern.test(TextField.getAttribute("style")))
            TextField.setAttribute("style", TextField.getAttribute("style").replace(new RegExp(pattern), ""));
        if (!TextField.getAttribute("style").length)
            TextField.removeAttribute("style");
    }
    //Удаление обработчика события;
    TextField.removeEventListener("focus", refresh, false);
    TextField.value = "";
}