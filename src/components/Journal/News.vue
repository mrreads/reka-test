<script>
export default {
    props: ['title', 'text', 'tag']
}
</script>

<template>
    <div class="gallery-news__item">
        <img class="gallery-news__item-image" src="https://via.placeholder.com/700" />

        <p class="gallery-news__item-title">{{ title }}</p>

        <div class="gallery-news__item-line"> </div>

        <p class="gallery-news__item-text">{{ text}}</p>
        
        <p class="gallery-news__item-tag"># {{ tag }}</p>
    </div>
</template>