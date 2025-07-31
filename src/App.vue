<template>
  <MainHeader />
  <router-view></router-view>
  <MainFooter />
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
  ogType: 'website',
  ogLocale: 'fa_IR',
  ogSiteName: 'SajadiDev',
  ogImage: {
    url: 'https://sajadidev.ir/sajadidev-logo-raster.png',
    width: 288,
    height: 288,
    alt: 'SajadiDev Logo',
    type: 'image/png'
  }
});

useHead({
  meta: [
    {name: 'theme-color', content: '#e0f2f1'},
    {name: 'description', content: 'طراحی و توسعه فول استک وبسایت، اپلیکیشن اندروید و بازی'}
  ]
});
</script>