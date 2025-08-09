---
title: 码镜
titleTemplate: MacOS 平台动态壁纸
pageClass: landing dark

layout: home
aside: false
editLink: false
markdownStyles: false
---

<script setup>
import { useData } from 'vitepress'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import Hero from './src/components/hero-section/HeroSection.vue'

const { isDark } = useData()

onMounted(() => {
  document.documentElement.classList.add('dark')
})

onBeforeUnmount(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<div class="VPHome">
  <Hero/>
</div>
