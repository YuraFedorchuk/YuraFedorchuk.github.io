function createScrollingAnimation(Container) {
    "use strict";
    var counter = 0;
    var internalCounter = 0;
    var currentScrolling = window.pageYOffset || document.documentElement.scrollTop;
    //"Проход" по всем DOM-элементам первого уровня вложенности;
    for (counter = 2; counter < Container.children.length - 1; counter++) {
        if (currentScrolling + document.documentElement.clientHeight < calculateOffset(Container.children[counter])) {
            //Добавление класса, который указывает на необходимость применения анимации для DOM-элемента;
            addClassName(Container.children[counter], "animated");
            //"Проход" по всем DOM-элементам второго уровня вложенности;
            for (internalCounter = 0; internalCounter < Container.children[counter].children.length; internalCounter++)
                Container.children[counter].children[internalCounter].style.opacity = 0;
        }
    }
}
function showChildren(Element) {
    "use strict";
    var counter = 0;
    var duration = 500;
    for (counter = 0; counter < Element.children.length; counter++) {
        opacityAnimationCall(Element.children[counter], duration, 1);
        //Удаление inline-стиля "opacity";
        cleanStyleAttribute(Element.children[counter], duration);
    }
    //Удаление класса, который указывает на то, что для текущего DOM-элемента нужно применять анимацию появления;
    cleanClassName(Element, "animated");
}
function showElement(Container, currentScrolling) {
    "use strict";
    var Element = new Object();
    var counter = 0;
    if (document.body.clientHeight > currentScrolling + document.documentElement.clientHeight) {
        for (counter = 0; counter < Container.getElementsByClassName("animated").length; counter++) {
            Element = Container.getElementsByClassName("animated")[counter];
            if (currentScrolling + document.documentElement.clientHeight / 2 >= calculateOffset(Element)) {
               showChildren(Element);
            }
        }
    } else {
        if (Container.getElementsByClassName("animated").length)
            for (counter = 0; counter < Container.getElementsByClassName("animated").length; counter++) {
                Element = Container.getElementsByClassName("animated")[counter];
                showChildren(Element);
            }
    }
}
function calculateOffset(Element) {
    "use strict";
    var rectangleCoordinates = Element.getBoundingClientRect();
    var Body = document.body;
    var HTMLDocument = document.documentElement;
    var scrollTop = window.pageYOffset || HTMLDocument.scrollTop || Body.scrollTop;
    var clientTop = HTMLDocument.clientTop || Body.clientTop || 0;
    return Math.round(rectangleCoordinates.top +  scrollTop - clientTop);
}
function addClassName(Element, className) {
    "use strict";
    if (Element.className.length) Element.className = Element.className + " ";
    if (!new RegExp(className).test(Element.className)) Element.className = Element.className + className;
}
function cleanClassName(Element, className) {
    "use strict";
    Element.className = Element.className.replace(new RegExp(className), "");
    if (/\s*$/.test(Element.className)) Element.className = Element.className.replace(/\s*$/, "");
    if (!Element.className.length) Element.removeAttribute("class");
}
function cleanStyleAttribute(Element, duration) {
    "use strict";
    window.setTimeout(function() {
        var pattern = /\s*(display:\s*block;\s*)|(opacity:\s*[0-9](\.[0-9])*;\s*)/ig;
        if (Element.hasAttribute("style"))
            if (pattern.test(Element.getAttribute("style"))) {
                Element.setAttribute("style", Element.getAttribute("style").replace(new RegExp(pattern), ""));
                if (!Element.getAttribute("style").length) Element.removeAttribute("style");
            }
        }, duration + 50);
}