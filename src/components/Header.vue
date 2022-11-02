<template>
    <div class="header">
        <div class="header-content container">
            <h1> <span>Выберите</span> вашу новую яхту </h1>
            <div class="header-content__line" />
            <p>Ищите, сравнивайте и покупайте лодки с помощью нашего каталого и проверенных экспертов</p>

            <div class="header__button">найти</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 50px;

    &-content {
        display: flex;
        flex-flow: column nowrap;

        width: max-content;

        & h1 {
            font-family: "Cormorant";
            font-size: 62px;
            text-transform: uppercase;
        }

        & p {
            font-family: "Roboto";
            font-size: 16px;
            line-height: 26px;
        }

        & h1, p {
            color: #FFFFFF;
            text-align: center;
            z-index: 1;
        }

        & span {
            color: #8E9FBC;
        }

        &__line {
            background-color: #FFFFFF;
            opacity: 0.35;
            height: 1px;
            width: 100%;

            margin: 30px 0;
        }
    }
    
    min-height: 715px;
    background-image: url('@/assets/images/header_background.png');
    background-position: center;
    background-size: cover;

    position: relative;
    &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #22282dd0;
    }
    &::after {
        content: "yachting";

        position: absolute;
        left: 45px;
        bottom: 45px;

        font-family: 'Roboto';
        font-size: 12px;
        line-height: 28px;
        letter-spacing: 12px;
        text-transform: uppercase;

        color: #FFFFFF;

        transition: .6s all;
        opacity: 1;
    }


    &__button {
        margin: 0 auto;
        margin-top: 65px;

        font-size: 12px;
        line-height: 22px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        background-image: url('@/assets/images/button.svg');
        background-position: center bottom;
        background-repeat: no-repeat;
        height: 0;
        width: 215px;
        overflow: hidden;
        transition: .3s all;

        position: relative;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
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

@media screen and (max-width: 1024px) {
    .header {
        padding: 0 35px;
    }
    .header-content h1 {
        font-size: 52px;
    }
    .header-content__line {
        margin: 15px 0;
    }
}

@media screen and (max-width: 768px) {
    .header::after {
        opacity: 0;
    }
    .header {
        &__button {
            height: 50px;
        }
    }

}

@media screen and (max-width: 550px) {
    .header {
        padding: 0 25px;
    }
    .header-content h1 {
        font-size: 36px;
    }
    .header-content p {
        font-size: 14px;
    }
}

@media screen and (max-width: 370px) {

}
</style>