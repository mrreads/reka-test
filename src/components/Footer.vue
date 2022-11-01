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
                <div class="footer__navigation-column">
                    <p class="footer__navigation-column__item title">Каталог</p>
                    <a href="#" class="footer__navigation-column__item">Каталог судов</a>
                    <a href="#" class="footer__navigation-column__item">Верфи</a>
                    <a href="#" class="footer__navigation-column__item">Ссылка 3</a>
                    <a href="#" class="footer__navigation-column__item">Ссылка 4</a>
                </div>

                <div class="footer__navigation-column">
                    <p class="footer__navigation-column__item title">Маркет</p>
                    <a href="#" class="footer__navigation-column__item">Маркет судов</a>
                    <a href="#" class="footer__navigation-column__item">Компании по продаже лодок</a>
                    <a href="#" class="footer__navigation-column__item">Ссылка 3</a>
                    <a href="#" class="footer__navigation-column__item">Ссылка 4</a>
                </div>

                <div class="footer__navigation-column">
                    <p class="footer__navigation-column__item title">Журнал</p>
                    <a href="#" class="footer__navigation-column__item">Подписка</a>
                    <a href="#" class="footer__navigation-column__item">О нас</a>
                    <a href="#" class="footer__navigation-column__item">Категория 3</a>
                    <a href="#" class="footer__navigation-column__item">Категория 4</a>
                </div>

                <div class="footer__navigation-column">
                    <p class="footer__navigation-column__item title">Пользователю</p>
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

                <button>ПОДПИСАТЬСЯ</button>
            </div>

        </div>

        <div class="footer__text">
            <div class="container">
                <p>© 2014-2022 ITBOAT</p>
                <p style="margin-left: auto">Дизайн и разработка:</p>
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

        & button {
            margin-top: 35px;

            background-color: #22282D;
            color: #FFFFFF;

            font-size: 12px;
            line-height: 22px;
            text-align: center;
            font-weight: bold;
            letter-spacing: 0.6px;
            text-transform: uppercase;

            border: 0;
            outline: 0;
            padding: 14px;

            cursor: pointer;
            border-radius: 5px;

            overflow: hidden;

            position: relative;
            &::after, &::before {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                content: '';
                background-color: #FFFFFF;
                height: 50px;
                width: 50px;
                border-radius: 100%;
            }
            &::after {
                left: calc(100% - 5px);
            }
            &::before {
                right: calc(100% - 5px);
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
        }

    }
}
</style>