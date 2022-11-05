<script>
import SelectFilter from '@/components/Select/Select.vue';
import './filter.scss'

export default {
    components: { SelectFilter },
    data() {
        return { 
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
                <p>тут будет слайдер</p>
            </div>

            <div class="filter-button">
                <div class="filter-button__item">НАЙТИ</div>
            </div>
        </div>
    </div>
</template>