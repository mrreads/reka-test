<script>
export default {
    props: ['title', 'text', 'tag'],
    data() {
        return { sliderBigTimer: 0, sliderImageCount: 100 }
    },
    created() {
        this.updateImage(this.$refs.sliderImage, this.sliderImageCount);
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
        prev() {
            this.sliderImageCount--, 
            this.updateImage(this.$refs.sliderImage, this.sliderImageCount);
            this.sliderBigTimer = 0;
        },
        next() {
            this.sliderImageCount++, 
            this.updateImage(this.$refs.sliderImage, this.sliderImageCount);
            this.sliderBigTimer = 0;
        },
    },
}
</script>

<template>
    <div class="gallery-sliders__side">

        <p class="gallery-sliders__side-text__tag"># {{tag}}</p>
        <p class="gallery-sliders__side-text__title">{{ title }}</p>

        <div class="gallery-sliders__side-arrow">
            <div class="gallery-sliders__side-arrow__left" @click="prev"><img src="@/assets/images/arrow.svg" /></div>
            <div class="gallery-sliders__side-arrow__right" @click="next"><img src="@/assets/images/arrow.svg" /></div>
        </div>


        <img class="gallery-sliders__side-image" src="https://via.placeholder.com/600/DD1111" ref="sliderImage" />
        <div class="gallery-sliders__side-text"> {{ text }}</div>

        <div class="gallery-sliders__side-mobile">
            <p class="gallery-sliders__side-mobile-title"> {{ title }}</p>
            <p class="gallery-sliders__side-mobile-text"> {{ text }} </p>
            
            <p class="gallery-sliders__side-mobile-tag"># {{ tag }}</p>
        </div>
    </div>
</template>