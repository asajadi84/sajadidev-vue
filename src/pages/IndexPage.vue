<template>
    <HeroSection />
    <ResumeSummary />
    <RandomPortfolios />
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import ResumeSummary from '@/components/ResumeSummary.vue'
import RandomPortfolios from '@/components/RandomPortfolios.vue'

export default {
  components: {
    HeroSection,
    ResumeSummary,
    RandomPortfolios
  }
}
</script>