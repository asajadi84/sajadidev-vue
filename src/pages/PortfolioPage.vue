<template>
    <MessageBox v-if="activeSkill == 'invalid'" title="خطا" message="مهارتی با این ID وجود ندارد." />
    <section v-else class="container-fluid">
        <div class="container">

            <div class="d-flex flex-row header--primary align-items-center">
                <h2 class="title--primary">نمونه‌کارها</h2>
                <div class="ms-auto">
                    <div class="input-group">
                        <label class="input-group-text" for="skillselect">مهارت</label>
                        <select v-model="activeSkill" @change="filterSkill" class="form-select" id="skillselect">
                            <option value="all">همه</option>
                            <option v-for="(skill, index) in skills" :key="index" :value="skill.id">{{ skill.name }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <PortfolioGrid :skill="activeSkill"/>

        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useResumeStore } from '@/store/resume'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import MessageBox from '@/components/MessageBox.vue'
import PortfolioGrid from '@/components/PortfolioGrid.vue'
const store = useResumeStore();
const route = useRoute();
const router = useRouter();

const { skills } = storeToRefs(store);
const activeSkill = computed(() => store.getActivePortfolioSkill(route.query.skill));

useSeoMeta({
  title: 'نمونه‌کارها',
  ogUrl: 'https://sajadidev.ir/#/portfolio',
  ogTitle: 'نمونه‌کارها',
});

function filterSkill(selectedSkill){

    let selectedRoute = '/portfolio';
    if(selectedSkill.target.value){
        if(selectedSkill.target.value != 'all'){
            selectedRoute += '?skill=' + selectedSkill.target.value;
        }
    }

    router.push(selectedRoute);
}

</script>