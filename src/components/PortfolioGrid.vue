<template>

    <div class="portfolio__group">
        <div v-if="!filteredPortfolios.length" class="alertbox">فاقد نمونه‌کار</div>
        <div v-else class="justify-content-center portfolio__container">
            <PortfolioCard v-for="(portfolio, index) of filteredPortfolios" :key="index" :portfolioItem="portfolio"/>
        </div>
    </div>
</template>

<script setup>
import { useResumeStore } from '@/store/resume'
import { defineProps } from 'vue'
import { computed } from 'vue'
import PortfolioCard from '@/components/PortfolioCard.vue'
const store = useResumeStore();

const props = defineProps({
    skill: {type: String, required: true}
});

const filteredPortfolios = computed(() => store.getFilteredPortfolios(props.skill));

</script>