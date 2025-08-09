import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import './styles/landing.css'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'aside-outline-after': () => h(WwAds),
      // 'layout-top': () => h(SponsorBanner),
      // 'aside-ads-before': () => h(AsideSponsors),
    })
  },
  enhanceApp({ app }) {
    // app.component('SvgImage', SvgImage)
    // app.component('ReleaseTag', ReleaseTag)
    // app.component('YouTubeVideo', YouTubeVideo)
    // app.component('NonInheritBadge', NonInheritBadge)
    // app.use(TwoslashFloatingVue)
  },
} satisfies Theme

