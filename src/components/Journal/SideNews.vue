<script>
export default {
    props: ['text', 'tag']
}
</script>

<template>
    <div class="gallery-news__side">
        <p class="gallery-news__side-text__tag"># {{ tag }}</p>
        <img class="gallery-news__side-image" src="https://via.placeholder.com/500/123456" />
        <div class="gallery-news__side-text"> {{ text}} </div>
    </div>
</template>