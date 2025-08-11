import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "码镜",
  description: "MacOS 平台动态壁纸软件",
  lang: "zh-CN",
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/src/docs/index' },
      { text: '捐助', link: '/src/donate' },
      { text: '关于', link: '/src/about' },
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '码镜介绍', link: '/src/docs/intro' },
          { text: '安装', link: '/src/docs/install' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          }
        },
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guang-zi-yu/codelume-site' }
    ],
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: `<a href='https://beian.miit.gov.cn/' target='_blank'> 皖 ICP 备 2025083092 号</a> <br\> 本网站参考 Vite 官网搭建，遵循 MIT 开源协议`,
      copyright:
        '版权所有 © 2025 至今 北京星界力科技有限公司'
    },
  }
})
