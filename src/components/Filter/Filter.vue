<script>
import SelectFilter from '@/components/Select/Select.vue';
import './filter.scss'

export default {
    components: { SelectFilter },
    data() {
        return { 
            sliderValue: [0, 44231321],
            selectedWallet: 'dollar',
            type: ['Любой', 'Другой', 'Иной'], 
            category:  ['Категория 1', 'Категория 2', 'Категория 3', 'Категория 4', 'Категория 5'], 
        }
    },
}

</script>

<template>
    <div class="filter" ref="filter">
        <div class="filter-content container">

            <div class="filter-select">
                <SelectFilter title="Тип судна" defaultValue="Любой" :options="type" />
            </div>
            
            <div class="filter-select">
                <SelectFilter title="Категории" defaultValue="Введите название" :options="category" />
            </div>

            <div class="filter-slider">
                <p class="filter-slider__title">Цена</p>

                <div class="filter-slider-values">
                    <p class="filter-slider-values__slider">от <span> {{ sliderValue[0].toLocaleString().replace(',', ' ') }} </span> </p>
                    <p class="filter-slider-values__slider" style="margin-left: auto;">до <span> {{ sliderValue[1].toLocaleString().replace(',', ' ') }} </span> </p>
                    
                    <p @click="(selectedWallet = 'dollar')" :class="this.selectedWallet == 'dollar' ? 'filter-slider-values__wallet active' : 'filter-slider-values__wallet'">$</p>
                    <p @click="(selectedWallet = 'ruble')" :class="this.selectedWallet == 'ruble' ? 'filter-slider-values__wallet active' : 'filter-slider-values__wallet'">₽</p>
                    <p @click="(selectedWallet = 'euro')" :class="this.selectedWallet == 'euro' ? 'filter-slider-values__wallet active' : 'filter-slider-values__wallet'">€</p>
                </div>

                <div class="filter-slider__item">
                    <vue-slider :min="0" :max="44231321" v-model="sliderValue" :tooltip="'none'"></vue-slider>
                </div>
                
            </div>

            <div class="filter-button">
                <div class="filter-button__item">НАЙТИ</div>
            </div>
        </div>
    </div>
</template>