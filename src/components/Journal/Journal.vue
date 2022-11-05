<script>
import './journal.scss'

export default {
    data() {
        return { selectedTab: 'all' }
    },
    methods: {
        selectTab(e) {
            this.selectedTab = e.target.dataset.type;
        }
    }
}
</script>

<template>
    <div class="journal" ref="journal">
        <div class="journal-heading container">
            <p class="journal__title">ЖУРНАЛ</p>
            <a href="#" class="journal__goto">перейти в журнал</a>
        </div>

        <div class="journal-tabs container">
            <div class="journal-tabs-wrapper" :data-selected="selectedTab">
                <div @click="selectTab" :class="selectedTab == 'all' ? 'journal-tabs__item active' : 'journal-tabs__item'" data-type="all">ВСЕ</div>
                <div @click="selectTab" :class="selectedTab == 'boat' ? 'journal-tabs__item active' : 'journal-tabs__item'" data-type="boat">Яхты</div>
                <div @click="selectTab" :class="selectedTab == 'style' ? 'journal-tabs__item active' : 'journal-tabs__item'" data-type="style">Стиль жизни</div>
                <div @click="selectTab" :class="selectedTab == 'people' ? 'journal-tabs__item active' : 'journal-tabs__item'" data-type="people">Люди</div>
                <div @click="selectTab" :class="selectedTab == 'tech' ? 'journal-tabs__item active' : 'journal-tabs__item'" data-type="tech">Техника</div>
                <div @click="selectTab" :class="selectedTab == 'photo' ? 'journal-tabs__item active' : 'journal-tabs__item'" data-type="photo">Фото</div>
            </div>
        </div>

        <p v-if="selectedTab == 'all'" class="journal__title centered">ВСЕ</p>
        <p v-if="selectedTab == 'boat'" class="journal__title centered">Яхты</p>
        <p v-if="selectedTab == 'style'" class="journal__title centered">Стиль жизни</p>
        <p v-if="selectedTab == 'people'" class="journal__title centered">Люди</p>
        <p v-if="selectedTab == 'tech'" class="journal__title centered">Техника</p>
        <p v-if="selectedTab == 'photo'" class="journal__title centered">Фото</p>
        
    </div>
</template>