<template>
    <section class="container-fluid">
        <div class="container container--maincard">
            <div class="d-flex flex-row header--primary align-items-center">
                <h2 class="title--primary">رزومه علی سجادی</h2>
                <span class="ms-auto">
                    <v-btn href="/sajadi_ali_resume.pdf" target="_blank" size="large" rounded="xl" density="compact" color="#009688">دانلود PDF</v-btn>
                </span>
            </div>
            <div class="maincard__body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="infobox">
                            <div class="d-flex flex-row align-items-center infobox__header">
                                <img class="icon--primary" src="@/assets/icons/account.svg" width="48">
                                <h2 class="infobox__title">درباره</h2>
                            </div>
                            <div class="infobox__body">
                                <p>برنامه‌نویسی را در حوزه‌های مختلف بازی‌سازی، توسعه اپلیکیشن اندروید و طراحی وب تجربه کرده‌ام اما در حال حاضر تمرکز اصلی‌ام بر طراحی وب است.</p>
                            </div>
                        </div>

                        <div class="infobox">
                            <div class="d-flex flex-row align-items-center infobox__header">
                                <img class="icon--primary" src="@/assets/icons/star.svg" width="48">
                                <h2 class="infobox__title">مهارت‌ها</h2>
                            </div>
                            <div class="infobox__body">
                                <div v-if="!skills.length" class="alertbox">فاقد مهارت</div>
                                <router-link v-else v-for="(skill, index) in skills" :key="index" :to="`/portfolio?skill=${skill.id}`" class="infobox__link">{{skill.name}}</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="d-md-none" style="margin-bottom: 48px;"></div>
                        <div class="infobox">
                            <div class="d-flex flex-row align-items-center infobox__header">
                                <img class="icon--primary" src="@/assets/icons/school.svg" width="48">
                                <h2 class="infobox__title">تحصیلات</h2>
                            </div>
                            <div class="infobox__body">
                                <p>کارشناسی ارشد - آموزش زبان انگلیسی</p>
                                <p style="margin-bottom: 16px;">دانشگاه شهرکرد</p>
                                <p>کارشناسی - مهندسی نرم‌افزار</p>
                                <p>دانشگاه آزاد</p>
                            </div>
                        </div>

                        <div class="infobox">
                            <div class="d-flex flex-row align-items-center infobox__header">
                                <img class="icon--primary" src="@/assets/icons/tools.svg" width="48">
                                <h2 class="infobox__title">ابزارها</h2>
                            </div>
                            <div class="infobox__body">
                                <div v-if="!tools.length" class="alertbox">فاقد ابزار</div>
                                <div v-else class="d-flex flex-row flex-wrap align-items-center">
                                    <img v-for="(tool, index) in tools" :key="index" class="infobox__tool-icon" data-toggle="tooltip" :title="tool.name" :src="getToolIcon(tool.id)" :alt="tool.name" width="48">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useResumeStore } from '@/store/resume'
import { onMounted } from 'vue'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min'
import { useSeoMeta } from '@unhead/vue'
const store = useResumeStore();

const { skills, tools } = storeToRefs(store);

function getToolIcon(id){
    return require(`@/assets/tool-icons/${id}.svg`);
}

onMounted(() => {
    document.querySelectorAll('[data-toggle="tooltip"]')
        .forEach(el => new Tooltip(el));
});

useSeoMeta({
  title: 'رزومه علی سجادی',
  ogUrl: 'https://sajadidev.ir/#/resume',
  ogTitle: 'رزومه علی سجادی',
});

</script>