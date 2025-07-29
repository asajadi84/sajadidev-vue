<template>
    <section class="container-fluid">
        <div class="container container--maincard">
            <div class="maincard__body--no-title">
                <div class="messagebox">
                    <img class="messagebox__clipart" src="@/assets/img/msg-clipart.svg">
                    <h2 class="messagebox__title align-items-center">{{ title }}</h2>
                    <p class="messagebox__description">{{ message }}</p>
                    <v-btn to="/" size="x-large" rounded="xl" density="compact" color="#d4e157">صفحه اصلی</v-btn>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    title: {type: String, required: true},
    message: {type: String, required: true}
});

</script>

<style>

.messagebox {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 48px 0;
}

.messagebox__clipart {
    margin-bottom: 24px;
    width: 256px;
}

.messagebox__title {
    color: var(--primary);
}

</style>