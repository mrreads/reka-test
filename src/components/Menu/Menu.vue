<script>
import './sticky.scss';
import './menu.scss';

export default {
    data() {
        return { journalOpened: false, sidebarOpened: false }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScrollEvent);
    },
    beforeDestroy() {
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
        },
        handleScrollEvent() {
            let height = 150;
            let scroll = window.scrollY;
            if (this.$refs.sticky)
                this.$refs.sticky.dataset.top = (scroll > height) ? 'false' : 'true';
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
                    document.body.classList.add('no-scroll')
                    this.$refs.sidebar.style.display = 'flex';
                }
                else
                {
                    document.body.classList.remove('no-scroll')
                    this.$refs.sidebar.style.display = 'none';
                }
            }

            if (this.journalOpened)
                this.journalToggle();
        }
    },
}

</script>

<template>
    <div class="sticky" :class="this.sidebarOpened ? 'active' : ''" ref="sticky" data-top="true">
        <div class="container">
            <a href="#" class="sticky-icon desktop"> <img  src="@/assets/images/logo_white.svg" /> </a>
            

            <div class="sticky-menu">
                <a class="sticky-menu__item" href="#">????????????</a>
                <a class="sticky-menu__item" href="#">??????????????</a>
                <a class="sticky-menu__item active" href="#">????????????</a>
                <a class="sticky-menu__item" href="#">??????????????</a>
                <a class="sticky-menu__item" href="#">?? ??????</a>
            </div>

            <div class="sticky__button">?????????????? ????????????????????</div>

            <div class="sticky__icon create"> </div>
            <div class="sticky__icon bookmark"> </div>
            <div class="sticky__icon chart"> <span class="tooltip">4</span> </div>

            <div class="sticky-profile">
                <div class="sticky-avatar">
                    <img class="sticky-avatar__image" src="@/assets/images/avatar.png" />
                    <img class="sticky-avatar__blur" src="@/assets/images/avatar.png" />
                </div>

                <p class="sticky-profile__name">?????????? ????????????</p>

                <a href="#" class="sticky-icon mobile"> <img  src="@/assets/images/logo_white.svg" /> </a>


                <div class="sticky__icon bookmark opened"> </div>
                <div class="sticky__icon chart opened"> </div>

                <div class="sticky-profile-burger" @click="sidebarToggle">
                    <div class="sticky-profile-burger__item"></div>
                    <div class="sticky-profile-burger__item"></div>
                </div>

                <div class="sticky-dropdown">
                    <div class="sticky-dropdown__info">
                        <div class="sticky-avatar">
                            <img class="sticky-avatar__image" src="@/assets/images/avatar.png" />
                            <img class="sticky-avatar__blur" src="@/assets/images/avatar.png" />
                        </div>
                        <div>
                            <p class="sticky-profile__name">?????????? ????????????</p>
                            <p class="sticky-profile__text">???????????? ???????????? </p>
                        </div>
                    </div>

                    <div class="sticky-dropdown__line" />

                    <div class="sticky-dropdown__item"> <a href="#">?????? ????????????????????</a> <span class="notification">10</span> </div>
                    <div class="sticky-dropdown__item"> <a href="#">?????? ????????????????????????</a> <span class="notification">4</span> </div>
                    <div class="sticky-dropdown__item"> <a href="#">????????????????</a> </div>
                    <div class="sticky-dropdown__logout"> <a href="#">??????????</a> </div>
                </div>
            </div>

        </div>
    </div>

    <div class="menu" style="display: none" ref="sidebar">

        <div class="menu-navigation" @click="journalToggle" style="display: flex" ref="navigation">
            <p class="menu-navigation__item nav">????????????</p>
            <p class="menu-navigation__item">??????????????</p>
            <p class="menu-navigation__item">????????????</p>
            <p class="menu-navigation__item">??????????????</p>
            <p class="menu-navigation__item">?? ??????</p>
        </div>

        <div class="menu-navigation links" ref="journal" style="display: none">
            <p class="menu-navigation__item back" @click="journalToggle">????????????</p>
            <p class="menu-navigation__item">??????</p>
            <p class="menu-navigation__item">?????????? ?????????? </p>
            <p class="menu-navigation__item">??????????????</p>
            <p class="menu-navigation__item">????????</p>
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

        <div class="menu__button">?????????????? ????????????????????</div>

    </div>
</template>