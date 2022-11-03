<script>
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


<style lang="scss" scoped>
.footer {
    
    display: flex;
    flex-flow: column nowrap;

    border-top: 1px solid #E2E3E3;

    &__content {
        display: flex;
        flex-flow: row nowrap;
    }

    &__media {

        display: flex;
        flex-flow: column nowrap;

        padding: 45px;
        padding-top: 70px;

        width: 360px;

        font-family: 'Roboto';
        font-size: 14px;
        line-height: 24px;
        color: #7A8084;

        &-icon {
            width: 120px;
            margin-bottom: 40px;
        }

        &-social {

            display: flex;
            flex-flow: row nowrap;
            gap: 15px;

            margin-top: 60px;

            &__item {
                display: flex;
                justify-content: center;
                align-items: center;

                border: 1px dotted #E1E1E2;
                border-radius: 4px;

                height: 48px;
                width: 48px;

                transition: .3s all;
                cursor: pointer;
                &:hover {
                    background-color: #E1E1E2;
                }
            }
        }
    }

    &__navigation {
        display: flex;
        flex-flow: row nowrap;
        gap: 100px;

        padding: 45px;
        padding-top: 70px;

        border-left: 1px solid #E2E3E3;
        border-right: 1px solid #E2E3E3;

        flex-grow: 1;

        &-column {
            display: flex;
            flex-flow: column nowrap;
            gap: 8px;

            &__item {

                font-size: 14px;
                line-height: 24px;
                color: #7A8084;
                width: max-content;

                text-decoration: none;

                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    background-color: #E5E5E5;
                    height: 1px;
                    width: 0%;
                    transition: .3s all;
                }

                &.title {
                    margin-bottom: 22px;
                    font-weight: bold;

                    font-size: 16px;
                    color: #22282D;

                    cursor: default;
                    &::before {
                        width: 100%;
                    }
                }

                cursor: pointer;
                &:hover {
                    &::before {
                        width: 100%;
                    }
                }
            }
        }
    }

    &__mailing {
    
        display: flex;
        flex-flow: column nowrap;

        padding: 45px;
        padding-top: 70px;
        width: 360px;
    
        &-title {
            font-size: 24px;
            line-height: 34px;
            color: #22282D;

            margin-bottom: 25px;
        }

        &-input {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-bottom: 8px;
            border-bottom: 1px solid #E2E3E3;
            gap: 15px;

            & input {
                font-family: 'Roboto';
                font-size: 16px;
                line-height: 22px;
                color: #7A8084;
                outline: 0;
                border: 0;
                
                width: 100%;
            }
        }

        &-button {
            margin-top: 35px;


            color: #FFFFFF;
            font-size: 12px;
            line-height: 22px;
            text-align: center;
            font-weight: bold;
            letter-spacing: 0.6px;
            text-transform: uppercase;

            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
            background-image: url('@/assets/images/button_footer.svg');
            background-position: center bottom;
            background-repeat: no-repeat;
            min-height: 50px;
            min-width: 269px;
            
            position: relative;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 2px;
                background-color: #8E9FBC;
                transition: .6s;
            }
            &:hover {
                &::after {
                    width: 90px;
                }
            }
        }

    }

    &__checkbox-wrapper {
        margin-top: 25px;

        display: flex;
        flex-flow: row nowrap;

        gap: 15px;

        & input {
            display: none;
            &:checked + label {
                background-color: #E5E5E5;
            }
        }
        & label {
            border-radius: 5px;
            display: inline-block;

            min-height: 28px;
            min-width: 28px;
            max-height: 28px;
            max-width: 28px;
            border: 1px solid #E5E5E5;

            transition: .3s all;
            cursor: pointer;
        }

        & p {
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #7A8084;
            & span, & a {
                cursor: pointer;
                color: #7A8084;
                text-decoration: underline;
            }
        }
    }

    &__text {
        
        border-top: 1px solid #E2E3E3;

        & .container
        {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            gap: 15px;

            padding: 20px 45px;


            font-size: 14px;
            line-height: 26px;
            color: #7A8084;

            & a {
                color: #7A8084;
                text-decoration: none;
            }

            & p:nth-child(2) {
                margin-left: auto;
            }
        }

    }
}

@media screen and (max-width: 1700px) {
    .footer__content {
        display: grid;

        grid-template:
        "n n"
        "s m";
    }

    .footer__media {
        grid-area: s;
    }
    .footer__navigation {
        grid-area: n;
        justify-content: space-between;

        border-top: 0;
        border-bottom: 1px solid #E2E3E3;
    }
    .footer__mailing {
        grid-area: m;
        justify-self: end;

        border-right: 1px solid #E2E3E3;
        border-left: 1px solid #E2E3E3;
    }

    .footer__mailing-title {
        display: none;
    }
}

@media screen and (max-width: 1024px) {
    .footer__content {
        grid-template:
        "s m"
        "s n";
        grid-template-columns: 330px 1fr;
    }
    .footer__media {
        width: 330px;
    }
    .footer__navigation {
        justify-content: center;
        flex-flow: column nowrap;

        width: 100%;
        gap: 25px;

        &-column {
            max-height: 55px;
            transition: .3s all;
            overflow: hidden;

            width: 100%;

            &__item {

                padding-left: 65px;
                &:hover:not(.title) {
                    &::before {
                        display: none;
                    }
                }
                &.title {
                    cursor: pointer;

                    padding-top: 4px;

                    font-size: 16px;
                    line-height: 24px;
                    color: #22282D;

                    width: 100%;
                    &::before {
                        width: 100%;
                        bottom: -25px;
                    }
                    &::after {
                        position: absolute;
                        content: '';
                        top: 0;
                        left: 0;
                        height: 32px;
                        width: 32px;
                        background-image: url('@/assets/images/dropdown.svg');
                        background-repeat: no-repeat;
                        background-position: center;

                        transition: .3s all;
                    }
                }
            }

            &:last-child {
                & .title {
                    &::before {
                        opacity: 0;
                    }
                }
            }

            &[data-active=true] {
                max-height: 600px;
                margin-bottom: 25px;
                & .title {
                    &::before {
                        opacity: 0;
                    }
                    &::after {
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }
    .footer__mailing {
        justify-self: center;

        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .footer__content {
        grid-template:
        "s"
        "n"
        "m";
        grid-template-columns: 1fr;
    }

    .footer__navigation {
        &-column {
            &__item {
                padding-left: 0;
                &.title {
                    &::after {
                        left: calc(100% - 50px);
                    }
                }
            }
        }
        border-bottom: 0;
    }

    .footer__media {
        width: 100%;
        text-align: center;
        align-items: center;
        border-bottom: 0;
    }

    .footer__mailing {
        align-items: center;
    }

    .footer__media, .footer__navigation, .footer__mailing {
        padding: 35px;
    }

    .footer__text {
        & .container {
            flex-flow: row wrap;
            & p:first-child {
                width: 100%;
            }
            & p:nth-child(2) {
                margin-left: 0;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    .footer__content {
        grid-template:
        "s"
        "m"
        "n";
        grid-template-columns: 1fr;
    }

    .footer__media {
        display: none;
    }

    .footer__mailing {
        &-input {
            width: 100%;
        }
    }
    .footer__checkbox-wrapper {
        width: 100%;
    }

    .footer__media, .footer__navigation, .footer__mailing {
        padding: 30px;
    }
}

</style>