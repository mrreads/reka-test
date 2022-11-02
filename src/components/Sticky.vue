<script>
import { inject } from 'vue'

export default {
    setup() {
        const { header, updateHeader } = inject('header');
        return { header }
    },
    mounted() {
        document.addEventListener('scroll', this.handleScrollEvent)
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.handleScrollEvent)
    },
    methods: {
        handleScrollEvent(e) {
            let height = this.header.clientHeight;
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

        height: 65px;
    }

    border-bottom: 1px solid #FFFFFF10;

    & .sticky-icon {
        height: 25px;
        transition: .6s all;
        filter: invert(0);
    }
    color: #FFFFFF;

    &-avatar {

        height: 40px;
        width: 40px;
        
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
            filter: blur(13px);
        }
    }

    &-profile {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 15px;
        padding: 15px;

        margin-left: auto;

        &__name {
            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 12px;
            line-height: 22px;

            color: #FFFFFF;

            text-transform: uppercase;
        }

        height: 100%;
        border-left: 1px solid #FFFFFF10;
    }

    transition: .3s all;
    &[data-top=false] {
        background-color: #FFFFFF;
        & .sticky-icon {
            filter: invert(1);
        }
        border-bottom: 1px solid #E2E3E3;
        color: #22282D;
    }
}
</style>