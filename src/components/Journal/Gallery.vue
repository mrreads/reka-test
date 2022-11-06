<script>
import './gallery.scss'

export default {
    data() {
        return { sliderBigTimer: 0, sliderBigImageCount: 100, sliderSideImageCount: 100 }
    },
    created() {
        this.updateImage(this.$refs.bigSliderImage, this.sliderBigImageCount);
        this.updateImage(this.$refs.sideSliderImage, this.sliderSideImageCount);

        setInterval(() => {
            this.sliderBigTimer += 1;
            if (this.sliderBigTimer > 99)
            {
                this.sliderBigTimer = 0;
                this.sliderBigImageCount++; 
                this.updateImage(this.$refs.bigSliderImage, this.sliderBigImageCount);
            }

        }, 50)
    },
    beforeDestroy() {
    },
    methods: {
        updateImage(element, counter) {
            fetch(`http://jsonplaceholder.typicode.com/photos/${counter}`)
            .then(response => response.json())
            .then(json => {
                if (element)
                    element.src = json.url
            });
        },
        prevBig() {
            this.sliderBigImageCount--, 
            this.updateImage(this.$refs.bigSliderImage, this.sliderBigImageCount);
            this.sliderBigTimer = 0;
        },
        nextBig() {
            this.sliderBigImageCount++, 
            this.updateImage(this.$refs.bigSliderImage, this.sliderBigImageCount);
            this.sliderBigTimer = 0;
        },
        prevSide() {
            this.sliderSideImageCount--, 
            this.updateImage(this.$refs.sideSliderImage, this.sliderSideImageCount);
        },
        nextSide() {
            this.sliderSideImageCount++, 
            this.updateImage(this.$refs.sideSliderImage, this.sliderSideImageCount);
        }
    },
}
</script>

<template>
    <div class="gallery">
        <div class="gallery-content container">
            <div class="gallery-sliders">
                <div class="gallery-sliders__big">
                    <div class="gallery-sliders__big-nav">

                        <div class="gallery-sliders__big-nav-text">
                            <p class="gallery-sliders__big-nav-text__tag"># выставки и регаты</p>
                            <p class="gallery-sliders__big-nav-text__title">Princess F62</p>
                        </div>

                        <div class="gallery-sliders__big-arrow__left" @click="prevBig"><img src="@/assets/images/arrow.svg" /></div>
                        <div class="gallery-sliders__big-arrow__right" @click="nextBig"><img src="@/assets/images/arrow.svg" /></div>
                    </div>

                    <div class="gallery-sliders__big-progress" :style="{'width':sliderBigTimer+'%'}"></div>
                    <img class="gallery-sliders__big-image" src="https://via.placeholder.com/600/92c952" ref="bigSliderImage" />
                    <div class="gallery-sliders__big-text"> В линейке лодок норвежской компании Marex Boats появилась новая модель семейного круизера, которую широкой публике покажут только в следующем году. Но мы кое-что о ней...</div>
                </div>
                <div class="gallery-sliders__side">

                    <p class="gallery-sliders__side-text__tag"># лица индустрии</p>
                    <p class="gallery-sliders__side-text__title">Франсис Лапп</p>

                    <div class="gallery-sliders__side-arrow">
                        <div class="gallery-sliders__side-arrow__left" @click="prevSide"><img src="@/assets/images/arrow.svg" /></div>
                        <div class="gallery-sliders__side-arrow__right" @click="nextSide"><img src="@/assets/images/arrow.svg" /></div>
                    </div>
                    

                    <img class="gallery-sliders__side-image" src="https://via.placeholder.com/600/DD1111" ref="sideSliderImage" />
                    <div class="gallery-sliders__side-text"> Франсис Лапп — о том, как верфь Sunreef Yachts развивает сегмент роскошных катамаранов...</div>
               
                </div>
            </div>

            <div class="gallery-news">
                <div class="gallery-news__side">
                    <p class="gallery-news__side-text__tag"># лица индустрии</p>
                    <img class="gallery-news__side-image" src="https://via.placeholder.com/600/123456" />
                    <div class="gallery-news__side-text"> Марианна Хендрикс — о том, что сейчас происходит на верфи Moonen и в каком направлении она движется после смены владельцев</div>
                </div>
                <div class="gallery-news__item"></div>
                <div class="gallery-news__item"></div>
            </div>
        </div>
    </div>
</template>