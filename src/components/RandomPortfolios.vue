<template>
    <section class="container-fluid">
        <div class="container portfolio">
            <div class="d-flex flex-row flex-wrap align-items-center portfolio__header">
                <img class="icon--primary" src="@/assets/icons/pencil-ruler.svg" width="48">
                <h2 class="portfolio__title">نمونه‌کارهای تصادفی</h2>
                <router-link to="/portfolio" class="ms-auto link--primary">مشاهده تمام نمونه‌کارها ></router-link>
            </div>

            <div v-if="!randomPortfolios.length" class="alertbox">فاقد نمونه‌کار</div>
            <div v-else class="justify-content-center portfolio__container">
                <PortfolioCard v-for="(portfolio, index) of randomPortfolios" :key="index" :portfolioItem="portfolio"/>
            </div>

        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useResumeStore } from '@/store/resume'
import PortfolioCard from '@/components/PortfolioCard.vue'
const store = useResumeStore();

const randomPortfolios = computed(() => store.getRandomPortfolios);
</script>