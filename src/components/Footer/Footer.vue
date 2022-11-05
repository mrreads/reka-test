<script>
import './footer.scss';

export default {
    methods: {
        navigationToggle(e) {
            let value = e.srcElement.parentElement.dataset.active;
            e.srcElement.parentElement.dataset.active = (value != 'true') ? true : false;
        }
    }
}
</script>

<template>
    <div class="footer">
        <div class="footer__content container">

            <div class="footer__media">
                <img class="footer__media-icon" src="@/assets/images/logo.svg" />
                <p> Все права защищены. Журнал зарегистрирован в Федеральной службе по надзору в сфере связи и массовых коммуникаций. </p>
                <div class="footer__media-social">
                    <a href="#" class="footer__media-social__item">
                        <img src="@/assets/images/facebook.svg" />
                    </a>
                    <a href="#" class="footer__media-social__item">
                        <img src="@/assets/images/twitter.svg" />
                    </a>
                    <a href="#" class="footer__media-social__item">
                        <img src="@/assets/images/vk.svg" />
                    </a>
                    <a href="#" class="footer__media-social__item">
                        <img src="@/assets/images/instagram.svg" />
                    </a>
                </div>
            </div>

            <div class="footer__navigation">
                <div class="footer__navigation-column" :data-active='false'>
                    <p class="footer__navigation-column__item title" @click="navigationToggle">Каталог</p>
                    <a href="#" class="footer__navigation-column__item">Каталог судов</a>
                    <a href="#" class="footer__navigation-column__item">Верфи</a>
                    <a href="#" class="footer__navigation-column__item">Ссылка 3</a>
                    <a href="#" class="footer__navigation-column__item">Ссылка 4</a>
                </div>

                <div class="footer__navigation-column" :data-active='false'>
                    <p class="footer__navigation-column__item title" @click="navigationToggle">Маркет</p>
                    <a href="#" class="footer__navigation-column__item">Маркет судов</a>
                    <a href="#" class="footer__navigation-column__item">Компании по продаже лодок</a>
                    <a href="#" class="footer__navigation-column__item">Ссылка 3</a>
                    <a href="#" class="footer__navigation-column__item">Ссылка 4</a>
                </div>

                <div class="footer__navigation-column" :data-active='false'>
                    <p class="footer__navigation-column__item title" @click="navigationToggle">Журнал</p>
                    <a href="#" class="footer__navigation-column__item">Подписка</a>
                    <a href="#" class="footer__navigation-column__item">О нас</a>
                    <a href="#" class="footer__navigation-column__item">Категория 3</a>
                    <a href="#" class="footer__navigation-column__item">Категория 4</a>
                </div>

                <div class="footer__navigation-column" :data-active='false'>
                    <p class="footer__navigation-column__item title" @click="navigationToggle">Пользователю</p>
                    <a href="#" class="footer__navigation-column__item">События</a>
                    <a href="#" class="footer__navigation-column__item">Категория 2</a>
                    <a href="#" class="footer__navigation-column__item">Категория 3</a>
                    <a href="#" class="footer__navigation-column__item">Категория 4</a>
                </div>
            </div>

            <div class="footer__mailing">
                <p class="footer__mailing-title">Подписка на рассылку</p>

                <div class="footer__mailing-input">
                    <input type="text" placeholder="Email...">
                    <img src="@/assets/images/mail.svg" />
                </div>

                <div class="footer__checkbox-wrapper">
                    <input type="checkbox" name="mailing" id="footer-checkbox">
                    <label for="footer-checkbox" />
                    <p>Согласие на обработку <a href="#">персональных данных</a></p>
                </div>

                <div class="footer__mailing-button">ПОДПИСАТЬСЯ</div>
            </div>

        </div>

        <div class="footer__text">
            <div class="container">
                <p>© 2014-2022 ITBOAT</p>
                <p>Дизайн и разработка:</p>
                <a href="#">REKASTUDIO</a>
            </div>
        </div>
    </div>
</template>