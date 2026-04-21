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
          text: 'Overview',
          items: [
            { text: '文档总览', link: '/projects/onebot-kotlin-sdk/' }
          ]
        },
        {
          text: 'Shared',
          items: [
            { text: '模块与依赖', link: '/projects/onebot-kotlin-sdk/module-reference' }
          ]
        },
        {
          text: 'OneBot V11',
          items: [
            { text: 'V11 总览', link: '/projects/onebot-kotlin-sdk/v11/' },
            { text: 'V11 最小 API', link: '/projects/onebot-kotlin-sdk/v11/minimal-api' },
            { text: 'V11 事件监听', link: '/projects/onebot-kotlin-sdk/v11/event-listening' },
            { text: 'V11 通信模式', link: '/projects/onebot-kotlin-sdk/v11/transport-modes' },
            { text: 'V11 完整 API', link: '/projects/onebot-kotlin-sdk/v11/full-api' },
            { text: 'V11 运行命令', link: '/projects/onebot-kotlin-sdk/v11/run-commands' }
          ]
        },
        {
          text: 'OneBot V12',
          items: [
            { text: 'V12 总览', link: '/projects/onebot-kotlin-sdk/v12/' },
            { text: 'V12 最小 API', link: '/projects/onebot-kotlin-sdk/v12/minimal-api' },
            { text: 'V12 事件监听', link: '/projects/onebot-kotlin-sdk/v12/event-listening' },
            { text: 'V12 通信模式', link: '/projects/onebot-kotlin-sdk/v12/transport-modes' },
            { text: 'V12 完整 API', link: '/projects/onebot-kotlin-sdk/v12/full-api' },
            { text: 'V12 运行命令', link: '/projects/onebot-kotlin-sdk/v12/run-commands' },
            { text: 'V12 Kotlin API (KDoc)', link: '/projects/onebot-kotlin-sdk/kotlin-doc' }
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
