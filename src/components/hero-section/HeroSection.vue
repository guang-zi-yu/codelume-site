<script setup lang="ts">
import HeroDiagram from './HeroDiagram.vue'
</script>

<template>
  <div class="hero">
    <div class="container">
      <h1>码镜 <br /> CodeLume</h1>
      <!-- Tagline -->
      <h3>
        MacOS 平台动态壁纸软件
      </h3>

      <p style="text-indent: 2em;">
        码镜是一款专为 MacOS 平台打造的动态壁纸软件。
        它借助 MacOS 原生工具 XCode 开发，使用 Swift 语言编写，这使得它在 MacOS 平台运行稳定且性能表现出色。
        借助 AVFoundation 框架，用户可以将自己喜爱的视频设置为动态壁纸或者屏幕保护程序, 
        基于 SpriteKit 或 SceneKit 框架，实现实时渲染的动态壁纸，可以通过触控板与壁纸交互。 更多功能和用法请参考文档。
      </p>
      <br />

      <!-- CTA Buttons -->
      <div class="hero__actions">
        <a href="/docs" class="btn btn--primary">文档</a>
        <a href="https://github.com/guang-zi-yu/codelume/releases" class="btn btn--primary">下载</a>
        <a
          href="https://github.com/guang-zi-yu/codelume-site"
          target="_blank"
          class="btn btn--outline"
        >
          <img src="/github.svg" alt="GitHub logo" width="20" height="20" />
          GitHub
        </a>
      </div>
    </div>

    <!-- Animated Diagram -->
    <HeroDiagram />
  </div>
</template>

<style scoped>
.hero {
  /* overflow: hidden; */
  position: relative;
  z-index: 2;
  margin-bottom: 0;
  background-color: #101010;
  margin: -50px auto 0;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 902px;
  margin: 60px auto 0;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 30px;

  @media (min-width: 768px) {
    margin: 95px auto 0;
  }
}

.hero__pill {
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  display: inline-flex;
  padding: 6px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 1px solid rgba(189, 52, 254, 0.5);
  background: radial-gradient(
    1686.42% 113.39% at 83.25% 2.56%,
    rgba(189, 52, 254, 0.1) 0%,
    rgba(189, 52, 254, 0) 100%
  );
  box-shadow: none;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }

  span {
    color: #fff;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }

  &:hover {
    animation: hero-pill-glow 1600ms ease-out infinite alternate;
  }
}

@keyframes hero-pill-glow {
  0% {
    border-color: rgba(189, 52, 254, 0.5);
    box-shadow:
      0 0 5px rgba(189, 52, 254, 0.01),
      inset 0 0 5px rgba(189, 52, 254, 0.1);
  }
  100% {
    border-color: rgba(189, 52, 254, 0.6);
    box-shadow:
      0 0 20px rgba(189, 52, 254, 0.2),
      inset 0 0 10px rgba(189, 52, 254, 0.2);
  }
}

.hero__actions {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
}
</style>
