<script setup>
import './gallery.scss';

import BigSlider from './BigSlider.vue';
import SideSlider from './SideSlider.vue';

import SideNews from './SideNews.vue';
import News from './News.vue';
</script>

<template>
    <div class="gallery">
        <div class="gallery-content container">
            <div class="gallery-sliders">
                <BigSlider
                    tag="выставки и регаты" 
                    title="Princess F62" 
                    text="В линейке лодок норвежской компании Marex Boats появилась новая модель семейного круизера, которую широкой публике покажут только в следующем году. Но мы кое-что о ней..."  />
                <SideSlider
                    tag="лица индустрии" 
                    title="Франсис Лапп" 
                    text="Франсис Лапп — о том, как верфь Sunreef Yachts развивает сегмент роскошных катамаранов..." />
            </div>

            <div class="gallery-news" v-dragscroll>
                <SideNews 
                    tag="лица индустрии"
                    text="Марианна Хендрикс — о том, что сейчас происходит на верфи Moonen и в каком направлении она движется после смены владельцев" />
                <News  
                    tag="выставки и регаты" 
                    title="MAMBO — первенец технологий 3D-печати" 
                    text="Франсис Лапп — о том, как верфь Sunreef Yachts развивает сегмент роскошных катамаранов..." />
                <News  
                    tag="лица индустрии" 
                    title="Суперяхта Heesen Altea с дизайном от Omega Architects" 
                    text="Если сравнивать голландский дизайн с итальянским, то первый гораздо более артистичный, экспериментальный и вдохновляющий, — поясняет итальянец Габриэль Киаве, креативный директор..." />
            </div>
        </div>
    </div>
</template>