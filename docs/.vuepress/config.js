import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/linux/',
  theme: defaultTheme({
    logo: '/images/leaf.svg',
    contributors: false,
    navbar: [
      {
        text: 'Linux Pro',
        link: '/../linux/',
      },
      {
        text: 'Security Pro',
        link: '/../security_pro/',
      },
      {
        text: 'Tools',
        link: '/../tools/',
      },
      {
        text: 'English',
        link: '/../english-starter/',
      },
      {
        text: 'Semester 3',
        link: '/../Se/',
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Info',
          collapsable: false,
          children: [
            '/',
          ],
        },
        {
          text: '0.0 Linux Pro Introduction',
          collapsable: false,
          children: [
            '/00/',

          ]
        },

      ]
    },
  }),
  lang: 'zh-CN',
  title: "Security Pro",
  description: 'Notes',
})


