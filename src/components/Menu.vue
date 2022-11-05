<script>
export default {
    data() {
        return { journalOpened: false, sidebarOpened: false, dropdownOpened: false }
    },
    mounted() {
        window.addEventListener('click', this.outsideClick);
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScrollEvent);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.outsideClick);
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScrollEvent);
    },
    methods: {
        handleResize() {
            let width = document.body.clientWidth;
            if (width > 1280)
            {
                if (this.sidebarOpened)
                    this.sidebarToggle();
            }
            if (width > 768)
            {
                if (this.dropdownOpened)
                    this.dropdownToggle();
            }
        },
        handleScrollEvent() {
            let height = 150;
            let scroll = window.scrollY;
            if (this.$refs.sticky)
                this.$refs.sticky.dataset.top = (scroll > height) ? 'false' : 'true';
        },
        outsideClick(e) {
            let element = e.target;
            if (!element.closest('.sticky-profile') && this.dropdownOpened)
                this.dropdownToggle();
        },
        journalToggle() {
            this.journalOpened = !this.journalOpened;
            if (this.$refs.journal && this.$refs.navigation)
            {
                if (this.journalOpened)
                {
                    this.$refs.journal.style.display = 'flex';
                    this.$refs.navigation.style.display = 'none';
                }
                else
                {
                    this.$refs.journal.style.display = 'none';
                    this.$refs.navigation.style.display = 'flex';
                }
            }
        },
        sidebarToggle() {
            this.sidebarOpened = !this.sidebarOpened;
            if (this.$refs.sidebar)
            {
                if (this.sidebarOpened)
                {
                    document.body.style.overflow = 'hidden';
                    this.$refs.sidebar.style.display = 'flex';
                }
                else
                {
                    document.body.style.overflow = 'scroll';
                    this.$refs.sidebar.style.display = 'none';
                }
            }

            if (this.journalOpened)
                this.journalToggle();

            if (this.dropdownOpened)
                this.dropdownToggle();
        },
        dropdownToggle() {
            this.dropdownOpened = !this.dropdownOpened;
        }
    },
}

</script>

<template>
    <div class="sticky" :class="this.sidebarOpened ? 'active' : ''" ref="sticky" data-top="true">
        <div class="container">
            <a href="#" class="sticky-icon desktop"> <img  src="@/assets/images/logo_white.svg" /> </a>
            

            <div class="sticky-menu">
                <a class="sticky-menu__item" href="#">ЖУРНАЛ</a>
                <a class="sticky-menu__item" href="#">КАТАЛОГ</a>
                <a class="sticky-menu__item active" href="#">МАРКЕТ</a>
                <a class="sticky-menu__item" href="#">СОБЫТИЯ</a>
                <a class="sticky-menu__item" href="#">О НАС</a>
            </div>

            <div class="sticky__button">создать объявление</div>

            <div class="sticky__icon create"> </div>
            <div class="sticky__icon bookmark"> </div>
            <div class="sticky__icon chart"> <span class="tooltip">4</span> </div>

            <div class="sticky-profile">
                <div class="sticky-avatar" @click="dropdownToggle">
                    <img class="sticky-avatar__image" src="@/assets/images/avatar.png" />
                    <img class="sticky-avatar__blur" src="@/assets/images/avatar.png" />
                </div>

                <p class="sticky-profile__name">Алина Вейдер</p>

                <a href="#" class="sticky-icon mobile"> <img  src="@/assets/images/logo_white.svg" /> </a>


                <div class="sticky__icon bookmark opened"> </div>
                <div class="sticky__icon chart opened"> </div>

                <div class="sticky-profile-burger" @click="sidebarToggle">
                    <div class="sticky-profile-burger__item"></div>
                    <div class="sticky-profile-burger__item"></div>
                </div>

                <div class="sticky-dropdown" :class="this.dropdownOpened ? 'active' : ''" ref="dropdown">
                    <div class="sticky-dropdown__info">
                        <div class="sticky-avatar">
                            <img class="sticky-avatar__image" src="@/assets/images/avatar.png" />
                            <img class="sticky-avatar__blur" src="@/assets/images/avatar.png" />
                        </div>
                        <div>
                            <p class="sticky-profile__name">Алина Вейдер</p>
                            <p class="sticky-profile__text">Личные данные </p>
                        </div>
                    </div>

                    <div class="sticky-dropdown__line" />

                    <div class="sticky-dropdown__item"> <a href="#">Мои объявления</a> <span class="notification">10</span> </div>
                    <div class="sticky-dropdown__item"> <a href="#">Мои презенетации</a> <span class="notification">4</span> </div>
                    <div class="sticky-dropdown__item"> <a href="#">Компания</a> </div>
                    <div class="sticky-dropdown__logout"> <a href="#">выйти</a> </div>
                </div>
            </div>

        </div>
    </div>

    <div class="menu" style="display: none" ref="sidebar">

        <div class="menu-navigation" @click="journalToggle" style="display: flex" ref="navigation">
            <p class="menu-navigation__item nav">журнал</p>
            <p class="menu-navigation__item">каталог</p>
            <p class="menu-navigation__item">маркет</p>
            <p class="menu-navigation__item">события</p>
            <p class="menu-navigation__item">о нас</p>
        </div>

        <div class="menu-navigation links" ref="journal" style="display: none">
            <p class="menu-navigation__item back" @click="journalToggle">журнал</p>
            <p class="menu-navigation__item">все</p>
            <p class="menu-navigation__item">стиль жизни </p>
            <p class="menu-navigation__item">техника</p>
            <p class="menu-navigation__item">яхты</p>
            <p class="menu-navigation__item">Premium</p>
        </div>

        <div class="menu-social">
            <a href="#" class="menu-social__item">
                <img src="@/assets/images/facebook.svg" />
            </a>
            <a href="#" class="menu-social__item">
                <img src="@/assets/images/twitter.svg" />
            </a>
            <a href="#" class="menu-social__item">
                <img src="@/assets/images/vk.svg" />
            </a>
            <a href="#" class="menu-social__item">
                <img src="@/assets/images/instagram.svg" />
            </a>
        </div>

        <div class="menu__button">создать объявление</div>

    </div>
</template>

<style lang="scss" scoped>
.sticky {
    z-index: 15;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    & .container {
        padding: 0 45px;

        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 15px;

        height: 90px;
    }

    border-bottom: 1px solid #FFFFFF10;

    & .opened {
        display: none;
    }
    &.active {
        border-bottom: 1px solid #E2E3E3 !important;
        & .sticky {
            &-icon {
                &.mobile {
                    display: none !important;
                }
            }
            &-profile {
                &__name {
                    display: block;
                }
                &-burger {
                    margin-left: 15px;
                }
                & .opened {
                    display: flex;
                }
                & .bookmark {
                    margin-left: auto;
                }
            }

            &-profile {
                &-burger {
                    gap: 0px;
                    & div {
                        width: 27px;
                    }
                    & div:first-child {
                        transform: rotate(45deg);
                    }
                    & div:last-child {
                        transform: rotate(-45deg);
                        margin-top: -2px;
                    }
                }
            }
            & .chart {
                background-image: url('@/assets/images/chart_dark.svg');
            }
            & .bookmark {
                background-image: url('@/assets/images/bookmark_dark.svg');
            }
        }
    }

    & .sticky-icon {
        height: 25px;
        transition: .6s all;
        filter: invert(0);

        &.mobile {
            display: none;
        }
    }
    color: #FFFFFF;

    &-menu {

        display: flex;
        flex-flow: row nowrap;
        gap: 35px;

        width: 100%;
        justify-content: flex-end;
        align-items: center;

        margin-right: 150px;


        &__item {
            text-decoration: none;

            font-size: 14px;
            line-height: 22px;
            text-transform: uppercase;

            color: #FFFFFF;
        }
    }
    &-avatar {

        min-height: 40px;
        min-width: 40px;
        max-height: 40px;
        max-width: 40px;
        
        position: relative;
        & img {
            position: absolute;

            width: 100%;
            height: 100%;
            border-radius: 100%;
        }

        &__image {
            z-index: 5;
        }
        &__blur {
            transition: .6s all;
            transform: scale(1);
            filter: blur(13px);
        }
    }

    &-profile {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 15px;
        padding: 15px;
        padding-left: 45px;
        padding-right: 0; 

        margin-left: auto;
        margin-left: 30px;

        &__name {
            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 12px;
            line-height: 22px;

            color: #FFFFFF;

            text-transform: uppercase;
            white-space: pre;
        }

        height: 100%;
        border-left: 1px solid #FFFFFF10;

        &-burger {
            margin-left: 20px;
            display: none;
            flex-flow: column nowrap;
            gap: 10px;

            & div {
                display: block;
                width: 26px;
                min-height: 2px;
                max-height: 2px;
                background-color: #FFFFFF;

                transition: .6s all;
            }
        }

        padding: relative;
        &:hover {
            & .sticky-dropdown {
                max-height: 280px;
                padding: 30px;

                opacity: 1;
                user-select: all;
                pointer-events: all;
            }
        }
    }

    &-dropdown {
        position: absolute;
        bottom: 15px;
        transform: translateY(100%);
        right: 25px;
        
        display: flex;
        flex-flow: column nowrap;

        transition: .3s all;
        max-height: 0px;

        opacity: 0;
        user-select: none;
        pointer-events: none;

        min-width: 250px;

        padding: 0 30px;
        background-color: #FFFFFF;
        border-radius: 5px;

        color: #7A8084;


        & .sticky-profile__name {
            color: #22282D;
            justify-content: flex-start;

            font-size: 16px;
            line-height: 19px;

            text-transform: none;
        }
        & .sticky-profile__text {
            font-size: 12px;
            line-height: 14px;

            color: #7A8084 !important;

            margin-top: 2px;
        }
        &__info {
            display: flex;
            flex-flow: row nowrap;
            gap: 15px;

            align-items: flex-end;
        }

        &__line {
            min-height: 1px;
            width: 100%;
            background-color: #F2F2F2;
            margin: 15px 0;
        }
        &__item {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            gap: 0 15px;

            margin-bottom: 18px;
            & a {
                font-size: 16px;
                line-height: 22px;
                color: #7A8084 !important;
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
                cursor: pointer;
                &:hover {
                    &::before {
                        width: 100%;
                    }
                }
            }
            & .notification {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                gap: 10px;

                min-width: 24px;
                min-height: 24px;
                max-width: 24px;
                max-height: 24px;

                background-color: #8E9FBC;
                box-shadow: 0px 5px 10px rgba(142, 159, 188, 0.26);
                border-radius: 31px;

                font-size: 12px;
                line-height: 14px;
                text-align: center;
                text-transform: uppercase;

                /* white */
                color: #FFFFFF;
            }
        }
        &__logout a {
            margin-top: 7px;

            font-size: 12px;
            line-height: 22px;
            text-decoration-line: underline;

            color: #7A8084 !important;
        }

        box-shadow: 10px 10px 100px rgba(155, 163, 172, 0.25);

        &::before {
            position: absolute;
            content: '';
            top: -4px;
            right: 15px;

            width: 0px;
            height: 0px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid #FFFFFF;

        }
    }

    &__button {
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 15px;
        
        cursor: pointer;
        background-image: url('@/assets/images/button_sticky_dark.svg');
        background-position: center bottom;
        background-repeat: no-repeat;
        min-height: 50px;
        min-width: 215px;
        overflow: hidden;
        transition: .3s all;

        position: relative;
        &::after {
            content: '';
            position: absolute;
            bottom: 1px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 2px;
            background-color: #8E9FBC;
            transition: .6s;
        }
        &:hover {
            &::after {
                width: 140px;
            }
        }
    }

    &__icon {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        background-position: center center;
        background-repeat: no-repeat;
        min-height: 30px;
        min-width: 30px;
        max-height: 30px;
        max-width: 30px;
        transition: .3s all;

        position: relative;

        &.create {
            display: none;
            background-image: url('@/assets/images/create_dark.svg');
        }
        &.chart {
            background-image: url('@/assets/images/chart_dark.svg');
        }
        &.bookmark {
            background-image: url('@/assets/images/bookmark_dark.svg');
        }

        & .tooltip {
            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-transform: uppercase;
            color: #22282D;

            min-height: 19px;
            min-width: 19px;
            max-height: 19px;
            max-width: 19px;

            background-color: #FFFFFF;
            border-radius: 100%;

            position: absolute;
            bottom: -5px;
            left: 15px;
            z-index: 1;

            transition: .3s all;
        }
    }

    transition: 1s all;
    
    &[data-top=false], &.active {
        background-color: #FFFFFF;
        & .sticky-icon {
            filter: invert(1);
        }
        & .sticky-avatar__blur {
            transform: scale(0.6);
        }
        border-bottom: 1px solid #E2E3E3;
        & p, & a {
            color: #22282D;
        }
        & .sticky-profile {
            border-left: 1px solid #E2E3E3;
            &-burger {
                & div {
                    background-color: #CFD1D3;
                }
            }
        }
        & .sticky-menu {
            &__item {
                transition: .3s all;
                opacity: .6;
                color: #22282D;
                &:hover {
                    opacity: .8;
                }
                &.active {
                    opacity: 1;
                }
            }
        }
        & .sticky__button {
            background-image: url('@/assets/images/button_sticky_light.svg');
            &::after {
                width: 0;
                background-color: #C7CFDE;
            }
            &:hover {
                &::after {
                    width: 140px;
                }
            }
        }

        & .sticky__icon {
            &.create {
                background-image: url('@/assets/images/create_light.svg');
            }
            &.chart {
                background-image: url('@/assets/images/chart_light.svg');
            }
            &.bookmark {
                background-image: url('@/assets/images/bookmark_light.svg');
            }
            & .tooltip {
                color: #FFFFFF;
                background-color: #8E9FBC;
            }
        }
    }
}

@media screen and (max-width: 1440px) {
    .sticky {
        & .container {
            max-height: 65px;
        }
        &-dropdown {
            bottom: 0px;
        }
        &-menu {
            margin-left: auto;
        }
        &__button {
            max-height: 0;
            display: none;
        }
        & .create {
            display: block;
        }
    }
}

@media screen and (max-width: 1280px) {
    .sticky {
        &-menu {
            display: none;
        }
        & .bookmark {
            margin-left: auto;
        }
        & .create {
            margin-left: auto;
        }
        & .bookmark {
            margin-left: 0;
        }
        &-profile {
            &-burger {
                display: flex;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .sticky {
        &:not(.active) {
            border-bottom: 0 !important;
        }
        &-dropdown {
            right: unset;
            left: 25px;
            max-height: 0 !important;
            padding: 0 30px !important;
            opacity: 0 !important;

            &::before {
                left: 28px;
            }

            & .sticky-profile__name {
                display: block;
            }
            &.active {
                padding: 30px !important;
                max-height: 280px !important;
                opacity: 1 !important;
                user-select: all;
                pointer-events: all;
            }
        }
        & .container {
            display: flex;
            padding: 0 35px;
            max-height: 80px;
            flex-flow: row nowrap;
        }

        & .create, & .bookmark, & .chart {
            display: none;
        }

        &-icon {
            &.desktop {
                display: none;
            }
            &.mobile {
                display: flex !important;
                justify-content: center;
                align-items: center;
                order: 2;
                width: 100%;
            }
        }

        &-profile {
            display: flex;
            flex-flow: row nowrap;

            border-left: 0 !important;
            margin-left: 0;
            padding-left: 0;
            width: 100%;

            &__name {
                display: none;
            }
            &__avatar {
                cursor: pointer;
                order: 1;
            }

            &-burger {
                order:  3;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .sticky.active .opened {
        display: none !important;
    }
}

@media screen and (max-width: 500px) {
    .sticky {
        & .container {
            padding: 0 20px;
        }
        &-icon {
            &.mobile {
                height: 20px;
            }
        }
        &-dropdown {
            &::before {
                left: 10px;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
.menu {
    display: flex;
    flex-flow: column nowrap;

    overflow: scroll;

    z-index: 8;
    position: fixed;
    top: 65px;
    height: calc(100% - 65px);
    width: 100%;
    background-color: #FFFFFF;

    padding-bottom: 25px;
    &-social {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        gap: 15px;
        margin: 25px 0;
        padding: 0 50px;

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

    &__button {
        align-self: flex-start;

        font-size: 12px;
        line-height: 22px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;


        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0 auto;
        
        cursor: pointer;
        background-image: url('@/assets/images/menu_button.svg');
        background-position: center bottom;
        background-repeat: no-repeat;
        min-height: 50px;
        min-width: 277px;
        overflow: hidden;
        transition: .3s all;

        position: relative;
        &::after {
            content: '';
            position: absolute;
            bottom: 1px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 2px;
            background-color: #8E9FBC;
            transition: .6s;
        }
        &:hover {
            &::after {
                width: 140px;
            }
        }
    }

    &-navigation {
        padding: 0 50px;

        margin: 55px 0;

        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        gap: 10px;
        
        &__item {
            display: flex;
            align-items: center;

            padding: 15px 0;

            font-size: 14px;
            text-transform: uppercase;

            color: #7A8084;
            cursor: pointer;

            &.nav {
                position: relative;
                &::after {
                    position: absolute;
                    content: '';
                    top: 50%;
                    transform: translateY(-50%) rotate(-90deg);
                    right: -95px;
                    height: 32px;
                    width: 32px;
                    background-image: url('@/assets/images/dropdown.svg');
                    background-repeat: no-repeat;
                    background-position: center;

                    transition: .3s all;
                }
            }
        }

        &.links {
            padding: 0;
            margin-top: 0;
            & .menu-navigation__item {
                padding: 15px 50px;

                &.back {
                    align-items: center;
                    justify-content: center;
                    padding: 17px 0;
                    font-weight: bold;
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #22282D;
                    background-color: #F5F5F5;
                    text-align: center;
                    width: 100%;

                    position: relative;
                    &::after {
                        position: absolute;
                        content: '';
                        top: 50%;
                        transform: translateY(-50%);
                        left: 35px;
                        height: 32px;
                        width: 32px;
                        background-image: url('@/assets/images/back.svg');
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .menu {
        top: 80px;
        height: calc(100% - 80px);
    }
}
@media screen and (max-width: 500px) {
    .menu {
        &-navigation {
            align-items: flex-start;
        }
        &-social {
            justify-content: flex-start;
            align-items: flex-start;
        }
        &__button {
            margin: 0;
            margin-left: 50px;
        }
        &-navigation {
            &__item {
                width: 100%;
                &.nav {
                    &::after {
                        top: 50%;
                        transform: translateY(-50%) rotate(-90deg);
                        right: 0;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1280px) {
    .menu {
        display: none !important;
    }
}
</style>