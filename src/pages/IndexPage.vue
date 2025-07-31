<template>
    <HeroSection />
    <ResumeSummary />
    <RandomPortfolios />
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ResumeSummary from '@/components/ResumeSummary.vue'
import RandomPortfolios from '@/components/RandomPortfolios.vue'
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: 'علی سجادی - طراح و توسعه‌دهنده فول استک',
  ogUrl: 'https://sajadidev.ir',
  ogTitle: 'علی سجادی - طراح و توسعه‌دهنده فول استک',
});

</script>