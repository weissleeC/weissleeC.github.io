module.exports = {
  lang: 'zh-CN',
  title: 'Lee\'s blog',
  description: '李立的个人博客',
  head: [
    ['link', { rel: 'icon', href: './favicon.png' }],
  ],
  base: './',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: './favicon.png',
    nav:[
      {text: '前端笔记', link: '/accumulate/' },
      {text: 'Github', link: 'https://github.com/weissleeC'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
}