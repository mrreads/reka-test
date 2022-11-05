<script>
export default {
    props: ['title', 'defaultValue', 'options'],
    data() {
        return { selectOpened: false, selected: this.defaultValue }
    },
    mounted() {
        window.addEventListener('click', this.outsideClick);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.outsideClick);
    },
    methods: {
        outsideClick(e) {
            if (!(this.$refs.select == e.target || this.$refs.select.contains(e.target)))
                this.selectOpened = false;
        },
        toggleDropdown(e) {
            if (!e.target.closest('.select-dropdown'))
                this.selectOpened = !this.selectOpened;
        },
        selectValue(e) {
            this.selected = e;
            this.selectOpened = false;
        }
    }
}
</script>

<template>
    <div class="select" :class="this.selectOpened ? 'active' : ''" @click="toggleDropdown" ref="select">
        <p class="select__title"> {{ title }} </p>
        <p class="select__subtitle"> {{ selected }} </p>

        <div class="select-dropdown">
            <p class="select-dropdown__item" v-for="option in options" :key="option" @click="selectValue(option)">
            {{ option }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.select {
    display: flex;
    flex-flow: column nowrap;
    
    font-size: 16px;
    line-height: 22px;

    &__title {
        font-weight: 500;
        color: #22282D;
    }
    &__subtitle {
        color: #7A8084;
    }

    padding-right: 75px;
    position: relative;
    &::after {
        content: '';
        position: absolute;

        min-width: 32px;
        min-height: 32px;
        max-width: 32px;
        max-height: 32px;

        bottom: 0;
        right: 0;

        border-radius: 100%;

        display: flex;
        justify-content: center;
        align-content: center;

        background-image: url('@/assets/images/dropdown.svg');
        background-repeat: no-repeat;
        background-position: center;

        transition: .3s all;
        cursor: pointer;
    }
    &.active {
        &::after {
            transform: rotate(180deg);
        }
    }

    &-dropdown {
        position: absolute;
        top: 83px;
        left: -40px;
        background-color: #FFFFFF;
        z-index: 1;

        width: calc(100% + 80px);
        &__item {
            color: #7A8084;
            padding: 12px 25px;
            border-bottom: 1px solid #E2E3E3;

            cursor: pointer;
            transition: .3s all;
            &:hover {
                background-color: #E5E5E5;
            }
            &:first-child {
                padding-top: 14px;
            }
            &:last-child {
                border-bottom: 0;
                padding-bottom: 14px;
            }
        }
        max-height: 0;
        border: 0;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 5px;
            border-radius: 2px;
        }

        &::-webkit-scrollbar-track {
            background: transparent; 
        }
        
        &::-webkit-scrollbar-thumb {
            background: #E2E3E3; 
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #E5E5E5; 
        }
    }
    &.active {
        & .select-dropdown {
            border: 1px solid #E2E3E3;
            max-height: 200px;
        }
    }
}
</style>