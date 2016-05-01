function initializeHandlers() {
    "use strict";
    var counter = 0;
    for (counter = 0; counter < document.getElementsByClassName("request-caller").length; counter++)
        document.getElementsByClassName("request-caller")[counter].addEventListener("submit", request, true);
}
function request(event) {
    "use strict";
    event = event || window.event;
    var Form = event.target;
    var XHR = new Object();
    var requestBody = "";
    if (validation(Form)) {
        requestBody = "name=" + encodeURIComponent(Form.elements.name) + "&email=" + encodeURIComponent(Form.elements.email) + "&phone_number=" + encodeURIComponent(Form.elements.phone_number);
        XHR = new XMLHttpRequest();
        XHR.onreadystatechange = function() {
            var ModalWindow = document.getElementsByClassName("active-modal-window")[0];
            var Background = document.getElementById("background");
            var duration = 500;
            if (XHR.readyState === 4) {
                //Если пользователь сделал заказ через модальное окно, существующее модальное окно необходимо закрыть;
                if (ModalWindow) {
                    //Сокрытие текущего активного модального окна;
                    clearClassAttribute(ModalWindow);
                    opacityAnimationCall(ModalWindow, duration, 0);
                    window.setTimeout(function() {
                        clearStyleAttribute(ModalWindow);
                        showMessageBox();
                    }, duration + 50);
                } else {
                    if (window.getComputedStyle(Background, "").display === "none") Background.style.display = "block";
                    opacityAnimationCall(Background, duration, 1);
                    showMessageBox();
                }
                cleanTextFields();
            }
        };
        //Удаления обработчика, который используется для сокрытия DOM-элемента, который выполняет роль модального окна;
        document.removeEventListener("click", closeModalWindow, true);
        XHR.open("POST", "php/handler.php", true);
        XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        XHR.send(requestBody);
    }
}