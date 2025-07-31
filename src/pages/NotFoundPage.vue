<template>
    <MessageBox title="خطای 404" message="صفحه مورد نظر وجود ندارد." />
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue'
import MessageBox from '@/components/MessageBox.vue'

useSeoMeta({
  title: 'خطای 404',
  ogTitle: 'خطای 404',
});

</script>