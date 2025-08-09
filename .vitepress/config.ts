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
      { text: '下载', link: '/download' },
      { text: '文档', link: '/docs' },
      { text: '关于', link: '/about' },
      { text: '捐助', link: '/donate' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

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
    footer: {
      message: `<a href='https://beian.miit.gov.cn/' target='_blank'> 皖 ICP 备 2025083092 号</a>
      <br \> 本网站基于 vitepress 快速搭建，参考了 vite 网站源码，感谢相关团队的开源`,
      copyright:
        '版权所有 © 2025 至今 北京星界力科技有限公司'
    },
  }
})
