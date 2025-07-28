<template>
    <h1>{{ skill }}</h1>

    <div class="portfolio__group">
        <div v-if="!portfolios.length" class="alertbox">فاقد نمونه‌کار</div>
        <div v-else class="justify-content-center portfolio__container">
            <PortfolioCard v-for="(portfolio, index) of portfolios" :key="index" :portfolioItem="portfolio"/>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useResumeStore } from '@/store/resume'
import { defineProps } from 'vue'
import PortfolioCard from '@/components/PortfolioCard.vue'
const store = useResumeStore();

//todo filteredPortfolios
const { portfolios } = storeToRefs(store);

defineProps({
    skill: {type: String, required: true}
});

</script>