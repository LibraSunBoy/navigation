const {autoGenerateSidebar} = require('./utils/autoSidebar');
// docs/.vuepress/config.js
module.exports = {
    title: 'navigation', // 网站标题
    description: '导航', // 网站描述
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '掘金', link: 'https://juejin.cn/'},
            {text: 'CSDN', link: 'https://blog.csdn.net/qq_36959217?spm=1010.2135.3001.5343'},
            {text: 'Gitee', link: 'https://gitee.com/sunnice'},
            {text: 'Github', link: 'https://github.com/LibraSunBoy/navigation'},
        ],
        // 左侧导航配置
        sidebar: [
            {
                title: '编程', // 导航组标题
                collapsable: false, // 是否可折叠
                children: autoGenerateSidebar('guide')
            },
            {
                title: 'AI',
                collapsable: false, // 是否可折叠
                children: autoGenerateSidebar('ai')
            }
        ]
    }
}