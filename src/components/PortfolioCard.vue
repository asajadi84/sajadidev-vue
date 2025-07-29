<template>
    <div class="portfolio__card">
        <router-link :to="`/portfolio/showcase?id=${portfolioItem.id}`">
            <img :src="getPortfolioFilePath(portfolioItem.thumbnail_file)" :alt="portfolioItem.description" loading="lazy">
            <div class="portfolio__card-content">
                <p class="portfolio__card-title">{{ portfolioItem.title }}
                    <span v-if="portfolioItem.is_opensource" class="badge bg-dark">اوپن سورس</span>
                </p>
                <p class="portfolio__card-skill">{{ skillName }}</p>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { computed } from 'vue'
import { useResumeStore } from '@/store/resume'
const store = useResumeStore();

const props = defineProps({
    portfolioItem: {type: Object, required: true}
});

const skillName = computed(() => store.getSkillName(props.portfolioItem.skill));

function getPortfolioFilePath(fileName){
    return require(`@/assets/portfolio-media/${fileName}`);
}

</script>

<style>

.portfolio__card {
    aspect-ratio: 1 / 1;
    background-color: var(--black);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
    flex: 0 1 408px;
    overflow: hidden;
    position: relative;
}

.portfolio__card img {
    transition: 0.4s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.portfolio__card:hover img {
    opacity: 0.8;
    transform: scale(1.1);
}

.portfolio__card-content {
    background-color: var(--primary);
    bottom: -200px;
    left: 50%;
    padding: 24px;
    position: absolute;
    transform: translateX(-50%);
    transition: 0.4s ease-in-out;
    width: 100%;
}

.portfolio__card:hover .portfolio__card-content {
    bottom: 0;
}

.portfolio__card-title {
    color: var(--secondary);
    font-size: 1.25rem;
    margin-bottom: 0;
}

.portfolio__card-skill {
    color: var(--white);
    margin-bottom: 0;
}

@media (max-width: 520px) {

    .portfolio__card {
        aspect-ratio: 1 / 1;
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
        flex: 0 1 408px;
        overflow: hidden;
        position: relative;
    }
    
    .portfolio__card img {
        width: 100%;
    }
    
    .portfolio__card-content {
        background-color: var(--primary);
        bottom: 0;
        left: 50%;
        padding: 24px;
        position: absolute;
        transform: translateX(-50%);
        transition: 0.4s ease-in-out;
        width: 100%;
    }

    .portfolio__card:hover img {
        opacity: 1;
        transform: none;
    }

}

@media (hover:none) {
    .portfolio__card {
        aspect-ratio: 1 / 1;
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
        flex: 0 1 408px;
        overflow: hidden;
        position: relative;
    }
    
    .portfolio__card img {
        width: 100%;
    }
    
    .portfolio__card-content {
        background-color: var(--primary);
        bottom: 0;
        left: 50%;
        padding: 24px;
        position: absolute;
        transform: translateX(-50%);
        transition: 0.4s ease-in-out;
        width: 100%;
    }
}

</style>