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
            '/00/01.md',
            '/00/02.md'
          ]
        },
        {
          text: '1.0 Linux Overview',
          collapsable: false,
          children: [
            '/01/01.md'
          ]
        },
        {
          text: '2.0 Using Linux',
          collapsable: false,
          children: [
            '/02/01.md',
            '/02/02.md',
            '/02/03.md',
            '/02/04.md',
            '/02/05.md',
            '/02/06.md',
            '/02/07.md',
            '/02/08.md',
            '/02/09.md',
            '/02/10.md',
            '/02/11.md',
            '/02/12.md',
            '/02/13.md'
          ]
        },
        {
          text: '3.0 Installation and Localization',
          collapsable: false,
          children: [
            '/03/01.md',
            '/03/02.md',
            '/03/03.md'
          ]
        },
        {
          text: '4.0 Boot and Shutdown',
          collapsable: false,
          children: [
            '/04/01.md',
            '/04/02.md',
            '/04/03.md',
            '/04/04.md',
            '/04/05.md'
          ]
        },
        {
          text: '5.0 Graphical User Interfaces and Desktops',
          collapsable: false,
          children: [
            '/05/01.md',
            '/05/02.md',
            '/05/03.md',
            '/05/04.md'
          ]
        },
        {
          text: '6.0 Software Installation',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '7.0 Users and Groups',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '8.0 Disk and File System Management',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '9.0 Hardware Installation',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '10.0 Processes and System Services',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '11.0 System Monitoring',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '12.0 Networking',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '13.0 Cloud, Containers, and Virtualization',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '14.0 Scripting and Automation',
          collapsable: false,
          children: [

          ]
        },
        {
          text: '15.0 Security',
          collapsable: false,
          children: [

          ]
        },

        {
          text: 'A0 Linux Pro - Practice Exams',
          collapsable: false,
          children: [

          ]
        },
        {
          text: 'B0 Linux Pro - CompTIA Linux+',
          collapsable: false,
          children: [

          ]
        },
        {
          text: 'Glossary',
          collapsable: false,
          children: [

          ]
        },
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Security Pro",
  description: 'Notes',
})


