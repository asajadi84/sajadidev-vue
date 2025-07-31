<template>
    <MessageBox v-if="!route.query.id" title="خطا" message="وارد کردن کوئری ID ضروری است." />
    <MessageBox v-else-if="!portfolio" title="خطا" message="نمونه‌کاری با این ID وجود ندارد." />
    <section v-else class="container-fluid">
        <div class="container container--maincard">
            <div class="showcase__card">
                <div class="showcase__introduction">

                    <div id="showcase__card-hero" class="showcase__card-hero"></div>

                    <div class="flex-wrap showcase__header">
                        <div class="showcase__header-card">
                            <img :src="getPortfolioFilePath(portfolio.thumbnail_file)" :alt="portfolio.description">
                        </div>
                        <div class="showcase__header-content">
                            <p class="showcase__header-breadcrumb">نمونه‌کارها >
                                <router-link :to="`/portfolio?skill=${portfolio.skill}`" class="showcase__header-link">{{ skillName }}</router-link>
                            </p>
                            <h2 class="showcase__header-title">{{ portfolio.title }}
                                <span v-if="portfolio.is_opensource" class="badge bg-success">اوپن سورس</span>
                            </h2>
                        </div>
                    </div>
                </div>
                
                <div class="showcase__card-body">

                    <div class="infobox">
                        <div class="d-flex flex-row align-items-center infobox__header">
                            <img class="icon--primary" src="@/assets/icons/text-box.svg" width="48">
                            <h2 class="infobox__title">توضیحات</h2>
                        </div>
                        <div class="infobox__body">
                            <p style="white-space: pre-wrap;">{{ portfolio.description }}</p>
                        </div>
                    </div>

                    <div v-if="portfolio.gallery.length" class="infobox">
                        <div class="d-flex flex-row align-items-center infobox__header">
                            <img class="icon--primary" src="@/assets/icons/image-album.svg" width="48">
                            <h2 class="infobox__title">گالری</h2>
                        </div>
                        <div class="infobox__body">
                            <div class="gallery__container">
                                <template v-for="(galleryItem, index) in portfolio.gallery" :key="index">
                                    <a v-if="galleryItem.endsWith('.mp4')" data-fancybox="gallery" :href="getPortfolioFilePath(galleryItem)">
                                        <video class="gallery__video" :src="getPortfolioFilePath(galleryItem)" controls></video>
                                    </a>
                                    <div v-else class="gallery__image-container">
                                        <a data-fancybox="gallery" :href="getPortfolioFilePath(galleryItem)">
                                            <img class="gallery__image" :src="getPortfolioFilePath(galleryItem)">
                                        </a>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="infobox">
                                <div class="d-flex flex-row align-items-center infobox__header">
                                    <img class="icon--primary" src="@/assets/icons/tools.svg" width="48">
                                    <h2 class="infobox__title">ابزارهای مورد استفاده</h2>
                                </div>
                                <div class="infobox__body">
                                    <div v-if="!portfolio.tools.length" class="alertbox">فاقد ابزار</div>
                                    <div v-else class="d-flex flex-row flex-wrap align-items-center">
                                        <img v-for="(tool, index) in portfolio.tools" :key="index" class="infobox__tool-icon" data-toggle="tooltip" :title="getToolNameFromId(tool)" :src="getToolIcon(tool)" :alt="getToolNameFromId(tool)" width="48">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-md-none" style="margin-bottom: 48px;"></div>
                            <div class="infobox">
                                <div class="d-flex flex-row align-items-center infobox__header">
                                    <img class="icon--primary" src="@/assets/icons/information-variant.svg" width="48">
                                    <h2 class="infobox__title">اطلاعات پروژه</h2>
                                </div>
                                <div class="infobox__body">
                                    <p>وضعیت: {{ portfolio.status }}</p>
                                    <p>لینک:
                                        <v-btn rounded="xl" density="compact" color="#d4e157" v-if="portfolio.link_url.startsWith('http://') || portfolio.link_url.startsWith('https://')" class="infobox__link--secondary" :href="portfolio.link_url" target="_blank">لینک پروژه</v-btn>
                                        <v-btn rounded="xl" density="compact" color="#d4e157" v-else class="infobox__link--secondary" style="cursor: not-allowed;">فاقد لینک</v-btn>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap align-items-center justify-content-center showcase__question">
                        <p>به پروژه مشابهی احتیاج دارید؟</p>
                        <div><v-btn to="/project" size="large" rounded="xl" density="comfortable" color="#009688">سفارش پروژه</v-btn></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useResumeStore } from '@/store/resume'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { onMounted } from 'vue';
import { Fancybox } from '@fancyapps/ui/dist/fancybox/'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min'
import { useSeoMeta, useHead } from '@unhead/vue'
import MessageBox from '@/components/MessageBox.vue'
import "@fancyapps/ui/dist/fancybox/fancybox.css"
const route = useRoute();
const store = useResumeStore();

const portfolio = computed(() => store.getPortfolio(route.query.id));
const skillName = computed(() => store.getSkillName(portfolio.value.skill));
const { tools } = storeToRefs(store);

onMounted(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});
    document.querySelectorAll('[data-toggle="tooltip"]')
        .forEach(el => new Tooltip(el));
});

useSeoMeta({
  title: portfolio.value ? portfolio.value.title : 'خطا',
  ogUrl: 'https://sajadidev.ir/#/portfolio/showcase?id=' + (portfolio.value ? portfolio.value.id : ''),
  ogTitle: portfolio.value ? portfolio.value.title : 'خطا',
});

useHead({
    script: [
        {
            src: '/particles/particles.min.js',
            defer: true
        },
        {
            src: '/particles/runParticles.js',
            defer: true
        }
    ]
});

function getPortfolioFilePath(fileName){
    return require(`@/assets/portfolio-media/${fileName}`);
}

function getToolIcon(id){
    return require(`@/assets/tool-icons/${id}.svg`);
}

function getToolNameFromId(ToolId){
    return tools.value.find(tool => tool.id == ToolId).name;
}

</script>

<style>

.showcase__card {
    background-color: var(--white);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
    margin-top: 24px;
    overflow: hidden;
}

.showcase__introduction {
    position: relative;
}

.showcase__card-hero {
    background-color: var(--primary-light);
    background-repeat: no-repeat;
    background-size: cover;
    height: 256px;
    width: 100%;
}

.showcase__card-body {
    margin-top: 168px;
    padding: 0px 64px 48px;
}

.showcase__header {
    align-items: flex-end;
    bottom: -168px;
    display: flex;
    gap: 32px;
    justify-content: center;
    padding: 48px 0;
    position: absolute;
    right: 64px;
}

.showcase__header-card {
    aspect-ratio: 1 / 1;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
    overflow: hidden;
    width: 192px;
}

.showcase__header-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.showcase__header-content {
    padding-bottom: 24px;
}

.showcase__header-breadcrumb {
    margin-bottom: 8px;
}

.showcase__header-link, .showcase__header-link:hover {
    color: var(--black);
}

.showcase__question {
    gap: 8px;
    padding-top: 48px;
    text-align: center;
}

.showcase__question p {
    font-size: 1.25rem;
    margin-bottom: 0;
}

.gallery__container {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
}

.gallery__image-container {
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
    flex: 1 0 320px;
}

.gallery__image {
    height: 100%;
    object-fit: contain;
    width: 100%;
}

.gallery__video {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
    flex: 1 0 320px;
}

@media (max-width: 1200px) {

    .showcase__card-body {
        padding: 48px 10%;
    }

    .showcase__header {
        padding-bottom: 0;
        padding-left: 10%;
        padding-right: 10%;
        position: static;
    }

    .showcase__card-hero {
        display: none;
    }

    .showcase__card-body {
        margin-top: 0;
    }

}

@media (max-width: 520px) {

    .gallery__image-container {
        flex: 1 0 100%;
    }
    
    .gallery__video {
        flex: 1 0 100%;
        width: 100%;
    }

    .gallery__container {
        gap: 16px;
    }

}

</style>