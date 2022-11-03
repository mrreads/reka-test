<script>
import { inject } from 'vue'

export default {
    mounted() {
        document.addEventListener('scroll', this.handleScrollEvent)
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.handleScrollEvent)
    },
    methods: {
        handleScrollEvent() {
            let height = 150;
            let scroll = window.scrollY;
            this.$refs.sticky.dataset.top = (scroll > height) ? 'false' : 'true';
        },
    },
}

</script>

<template>
    <div class="sticky" ref="sticky" data-top="true">
        <div class="container">
            <img class="sticky-icon" src="@/assets/images/logo_white.svg" />

            <div class="sticky-menu">
                <a class="sticky-menu__item" href="#">ЖУРНАЛ</a>
                <a class="sticky-menu__item" href="#">КАТАЛОГ</a>
                <a class="sticky-menu__item active" href="#">МАРКЕТ</a>
                <a class="sticky-menu__item" href="#">СОБЫТИЯ</a>
                <a class="sticky-menu__item" href="#">О НАС</a>
            </div>

            <div class="sticky__button">создать объявление</div>

            <div class="sticky__icon bookmark"> </div>
            <div class="sticky__icon chart"> <span class="tooltip">4</span> </div>

            <div class="sticky-profile">
                <div class="sticky-avatar">
                    <img class="sticky-avatar__image" src="@/assets/images/avatar.png" />
                    <img class="sticky-avatar__blur" src="@/assets/images/avatar.png" />
                </div>

                <p class="sticky-profile__name">Алина Вейдер</p>
            </div>

        </div>
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

    & .sticky-icon {
        height: 25px;
        transition: .6s all;
        filter: invert(0);
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
        height: 50px;
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
        background-position: center bottom;
        background-repeat: no-repeat;
        min-height: 30px;
        min-width: 30px;
        max-height: 30px;
        max-width: 30px;
        transition: .3s all;

        position: relative;

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
    
    &[data-top=false] {
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
</style>