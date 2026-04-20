import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "qfys521 doc site",
  description: "Project documentation hub",
  ignoreDeadLinks: [
    /\/projects\/onebot-kotlin-sdk\/kdoc(\/.*)?$/
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projects',
        items: [
          { text: 'All Projects', link: '/projects/' },
          { text: 'onebot-kotlin-sdk', link: '/projects/onebot-kotlin-sdk/' },
          { text: 'onebot-kotlin-sdk KDoc', link: '/projects/onebot-kotlin-sdk/kotlin-doc' }
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/projects/onebot-kotlin-sdk/': [
        {
          text: 'onebot-kotlin-sdk',
          items: [
            { text: 'Overview', link: '/projects/onebot-kotlin-sdk/' },
            { text: '模块怎么引用', link: '/projects/onebot-kotlin-sdk/module-reference' },
            { text: '最小 API 调用', link: '/projects/onebot-kotlin-sdk/minimal-api' },
            { text: '事件监听', link: '/projects/onebot-kotlin-sdk/event-listening' },
            { text: '通信模式', link: '/projects/onebot-kotlin-sdk/transport-modes' },
            { text: '可运行命令', link: '/projects/onebot-kotlin-sdk/run-commands' },
            { text: 'Kotlin API (KDoc)', link: '/projects/onebot-kotlin-sdk/kotlin-doc' }
          ]
        }
      ],
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: '项目总览', link: '/projects/' },
            { text: 'onebot-kotlin-sdk', link: '/projects/onebot-kotlin-sdk/' }
          ]
        }
      ],
      '/': [
        {
          text: 'Projects',
          items: [
            { text: '项目总览', link: '/projects/' },
            { text: 'onebot-kotlin-sdk', link: '/projects/onebot-kotlin-sdk/' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qfys521' }
    ]
  }
})
