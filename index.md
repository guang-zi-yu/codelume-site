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
import FeatureSection from './src/components/feature-section/FeatureSection.vue'
import FrameworksSection from './src/components/frameworks-section/FrameworksSection.vue'
import CommunitySection from './src/components/community-section/CommunitySection.vue'
import SponsorSection from './src/components/sponsor-section/SponsorSection.vue'
import GetStartedSection from './src/components/get-started-section/GetStartedSection.vue'
import FeatureInstantServerStart from './src/components/feature-section/FeatureInstantServerStart.vue'
// import FeatureHMR from './src/components/feature-section/FeatureHMR.vue'
// import FeatureRichFeatures from './src/components/feature-section/FeatureRichFeatures.vue'
// import FeatureOptimizedBuild from './src/components/feature-section/FeatureOptimizedBuild.vue'
// import FeatureFlexiblePlugins from './src/components/feature-section/FeatureFlexiblePlugins.vue'
// import FeatureTypedAPI from './src/components/feature-section/FeatureTypedAPI.vue'
// import FeatureSSRSupport from './src/components/feature-section/FeatureSSRSupport.vue'
// import FeatureCI from './src/components/feature-section/FeatureCI.vue'

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
  <FeatureSection title="基于 MacOS 平台原生工具开发" description="XCode + Swift + SwiftUI" type="blue">
    <FeatureInstantServerStart />
    <FeatureHMR />
    <FeatureRichFeatures />
    <FeatureOptimizedBuild />
  </FeatureSection>
  <FeatureSection title="利用 FrameWork 开发自定义可交互壁纸" description="使用 SpriteKit 框架开发 2D 动态壁纸,使用 SceneKit 框架开发 3D 动态壁纸" type="pink" class="feature-section--flip">
    <FeatureFlexiblePlugins />
    <FeatureTypedAPI />
    <FeatureSSRSupport />
    <FeatureCI />
  </FeatureSection>
  <FrameworksSection />
  
  <CommunitySection />
  <SponsorSection />
  <GetStartedSection />
</div>
