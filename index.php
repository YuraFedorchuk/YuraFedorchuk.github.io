<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Продающее видео</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="images/icons/fayvideo.ico" type="image/x-icon">
        <link rel="stylesheet" href="css/modal-window.css">
        <link rel="stylesheet" href="css/form.css">
        <link rel="stylesheet" href="css/boundary-module.css">
        <link rel="stylesheet" href="css/validation.css">
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/mobile-styles.css" media="only screen and (max-device-width: 360px)">
        <link rel="stylesheet" href="css/mobile-styles-480.css" media="only screen and (min-device-width: 480px) and (max-device-width: 640px)">
    </head>
    <body>
        <div class="frame">
            <div class="upper-module boundary-module">
                <?php include './boundary_module.php'; ?>
            </div>
            <header>
                <div class="additory-module">
                    <h1>Закажите продающее видео на 1-2 минуты, которое увеличит <br> конверсию на <span>64-85%</span> и принесёт Вам <br> в <span>2-4</span> раза больше клиентов в 2016-2017 годах</h1>
                    <h2>Производство Продающих Видео по всей Территории СНГ</h2>
                </div>
                <div class="internal-frame">
                    <div class="video-container">
                        <h3>135 Секунд, Которые Изменят Ваше Представление о Бизнесе</h3>
                        <iframe></iframe>
                    </div>
                    <?php include './form.php'; ?>
                </div>
            </header>
            <div class="advantages-module">
                <h2>Почему стоит заказывать у нас?</h2>
                <div class="internal-frame">
                    <p id="conversion">Наше Видео Увеличивает Конверсию от 64 до 85%</p>
                    <p id="technologies">Мы Предоставляем Вам Лучшие Технологии Западного Рынка</p>
                    <p id="complexity">Мы создаём Продающее Видео Любой Сложности</p>
                    <p id="clients">Нашими Услугами пользуются Крупнейшие Интернет Магазины СНГ и Телевидение</p>
                </div>
            </div>
            <div class="special-offer">
                <div class="internal-frame">
                    <div class="internal-container">
                        <h2>АКЦИЯ!</h2>
                        <div>
                            <p>Сделайте заказ до того, как таймер покажет 00:00:00, и получите ценный бонус <br> по привлечению клиентов:</p>
                            <div class="timer">
                                <div>
                                    <span class="days"></span>
                                    <p class="title">ДНЕЙ</p>
                                </div>
                                <div>
                                    <span class="hours"></span>
                                    <p class="title">ЧАСОВ</p>
                                </div>
                                <div>
                                    <span class="minutes"></span>
                                    <p class="title">МИНУТ</p>
                                </div>
                                <div>
                                    <span class="seconds"></span>
                                    <p class="title">СЕКУНД</p>
                                </div>
                            </div>
                            <span class="button modal-window-caller">ХОЧУ ВИДЕО И ПОДАРОК</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="opinions">
                <h2 class="light-line">О нас говорят</h2>
                <div class="internal-frame">
                    <iframe></iframe>
                    <iframe></iframe>
                </div>
            </div>
            <div class="clients">
                <h2 class="dark-line">Некоторые из наших клиентов</h2>
                <div class="internal-frame">
                    <img src="images/clients/ugra.png" alt="UGRA travel">
                    <img src="images/clients/show.png" alt="ШОУ на БИС">
                    <div>
                        <img src="images/clients/acmlv.png" alt="ACM.LV">
                        <img src="images/clients/medialook.png" alt="MEDIA LOOK">
                    </div>
                    <div>
                        <img src="images/clients/cityguidecard.png" alt="CityGuideCARD">
                        <img src="images/clients/sngb.png" alt="СНГБ">
                    </div>
                </div>
            </div>
            <div class="examples">
                <h2 class="dark-line">Просто взгляните</h2>
                <h3>Видеопрезентации используют такие гиганты:</h3>
                <div class="internal-frame">
                    <div id="apple"><span>Apple</span></div>
                    <div id="dolcegabana"><span>Dolce&Gabbana</span></div>
                </div>
                <span class="button modal-window-caller">ЗАКАЗАТЬ ВИДЕО</span>
            </div>
            <div class="working-principles">
                <h2 class="dark-line">Как мы работаем</h2>
                <div class="internal-frame">
                    <p id="data">Вы оставляете свои данные</p>
                    <p id="manager">Наш Менеджер связывается с Вами</p>
                    <p id="statement-of-work">Мы с Вами уточняем Детали и Бюджет</p>
                    <p id="scenario">Мы пишем Сценарий, и Вы его Утверждаете</p>
                    <p id="advertising-clip">Мы делаем Ролик, и Вы его Принимаете</p>
                    <p id="people">Вы удивляетесь Количеству Клиентов</p>
                </div>
            </div>
            <div class="special-offer-with-form">
                <div class="internal-frame">
                    <div class="internal-container">
                        <h2>АКЦИЯ!</h2>
                        <div>
                            <h3>Заполните форму сейчас</h3>
                            <h3>и получите <span>ценный бонус по привлечению клиентов:</span></h3>
                        </div>
                        <form class="request-caller" onsubmit="return false;">
                            <input type="text" name="name" placeholder="Введите Ваше имя">
                            <input type="text" name="email" placeholder="Введите Ваш E-mail">
                            <input type="text" name="phone_number" placeholder="Введите Ваш телефон">
                            <input type="submit" value="ЗАКАЖИТЕ" class="button">
                            <p>Мы гарантируем Вашу конфиденциальность</p>
                        </form>
                    </div>
                </div>
            </div>
            <div class="video-list">
                <h2 class="dark-line">Какие видео Вы можете заказать:</h2>
                <div class="internal-frame">
                    <ul class="list">
                        <li>Презентацию Товара или Услуги</li>
                        <li>Видео из Фотографий</li>
                        <li>Анимационное видео</li>
                        <li>Инфографику</li>
                        <li>Презентацию Сайта</li>
                        <li>Видеообзор</li>
                        <li>Рекламу для Телевидения</li>
                        <li>2D и 3D Графику</li>
                    </ul>
                </div>
            </div>
            <div class="portfolio">
                <h2 class="light-line">Некоторые из наших работ</h2>
                <div class="internal-frame">
                    <iframe></iframe>
                    <iframe></iframe>
                </div>
            </div>
            <div class="prices">
                <h2 class="dark-line">Наши цены</h2>
                <div class="internal-frame">
                    <div class="column">
                        <div class="standart">
                            <div class="prices-header">
                                <h3>STANDART</h3>
                                <h4>(монтаж из фотографий и готовых видео)</h4>
                            </div>
                            <ul class="prices-list">
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                            </ul>
                            <h3 class="bottom-module">18000р (5990грн) минута</h3>
                        </div>
                        <span class="button modal-window-caller">ПОЛУЧИТЬ ВИДЕО</span>
                    </div>
                    <div class="column">
                        <div class="gold">
                            <div class="prices-header">
                                <h3>GOLD</h3>
                                <h4>(инфографика, анимационный ролик)</h4>
                            </div>
                            <ul class="prices-list">
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                            </ul>
                            <h3 class="bottom-module">25000р (8290грн) минута</h3>
                        </div>
                        <span class="button modal-window-caller">ПОЛУЧИТЬ ВИДЕО</span>
                    </div>
                    <div class="column">
                        <div class="platinum">
                            <div class="prices-header">
                                <h3>PLATINUM</h3>
                                <h4>(дудл видео, 3D анимация)</h4>
                            </div>
                            <ul class="prices-list">
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                 <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                            </ul>
                            <h3 class="bottom-module">36000р (11900грн) минута</h3>
                        </div>
                        <span class="button modal-window-caller">ПОЛУЧИТЬ ВИДЕО</span>
                    </div>
                </div>
            </div>
            <div class="order">
                <h2 class="light-line">Хотите сделать заказ?</h2>
                <div class="internal-frame">
                    <div class="description">
                        <h3>Заполняйте форму справа прямо сейчас и получите <span>бесплатную консультацию</span></h3>
                        <h3>А также ценный бонус по привлечению клиентов!</h3>
                    </div>
                    <?php include './form.php'; ?>
                </div>
            </div>
            <footer class="footer boundary-module">
                <?php include './boundary_module.php'; ?>
            </footer>
        </div>
        <!--DOM-элементы для модальных окон-->
        <div class="modal-window-container">
            <div id="background"></div>
            <div id="modal-window">
                <span class="modal-window-button"></span>
                <?php include './form.php'; ?>
            </div>
            <div id="modal-window-message">
                <span class="modal-window-button"></span>
            </div>
        </div>
        <script src="js/clean_text_fields.js"></script>
        <script src="js/opacity_animation.js"></script>
        <script src="js/scrolling_animation.js"></script>
        <script src="js/modal_window.js"></script>
        <script src="js/validation.js"></script>
        <script src="js/request.js"></script>
        <script src="js/timer.js"></script>
        <script>
            window.onload = function() {
                initializeTimers();
                initializeModalWindow();
                initializeHandlers();
                createScrollingAnimation(document.getElementsByClassName("frame")[0]);
                console.log(window.pageYOffset || document.documentElement.scrollTop);
            };
            window.onscroll = function() {
                var currentScrolling = window.pageYOffset || document.documentElement.scrollTop;
                showElement(document.getElementsByClassName("frame")[0], currentScrolling);
            };
        </script>
    </body>
</html>
