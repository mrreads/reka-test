
<script>
export default {
    props: ['title', 'text', 'tag'],
    data() {
        return { sliderBigTimer: 0, sliderImageCount: 100 }
    },
    created() {
        this.updateImage(this.$refs.sliderImage, this.sliderImageCount);

        setInterval(() => {
            this.sliderBigTimer += 1;
            if (this.sliderBigTimer > 99)
            {
                this.sliderBigTimer = 0;
                this.sliderImageCount++; 
                this.updateImage(this.$refs.sliderImage, this.sliderImageCount);
            }

        }, 50)
    },
    methods: {
        updateImage(element, counter) {
            fetch(`https://jsonplaceholder.typicode.com/photos/${counter}`)
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
    <div class="gallery-sliders__big">
        <div class="gallery-sliders__big-nav">

            <div class="gallery-sliders__big-nav-text">
                <p class="gallery-sliders__big-nav-text__tag"># {{tag}}</p>
                <p class="gallery-sliders__big-nav-text__title">{{title}}</p>
            </div>

            <div class="gallery-sliders__big-arrow__left" @click="prev"><img src="@/assets/images/arrow.svg" /></div>
            <div class="gallery-sliders__big-arrow__right" @click="next"><img src="@/assets/images/arrow.svg" /></div>
        </div>

        <div class="gallery-sliders__big-progress" :style="{'width':sliderBigTimer+'%'}"></div>
        <img class="gallery-sliders__big-image" src="https://via.placeholder.com/600/92c952" ref="sliderImage" />
        <div class="gallery-sliders__big-text"> {{ text }} </div>
    
        <div class="gallery-sliders__big-mobile">
            <p class="gallery-sliders__big-mobile-title"> {{ title }} </p>
            <p class="gallery-sliders__big-mobile-text">{{ text }} </p>
            
            <p class="gallery-sliders__big-mobile-tag"># {{tag}}</p>
        </div>
    </div>
</template>