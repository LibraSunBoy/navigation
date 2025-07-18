// docs/.vuepress/config.js
module.exports = {
    title: 'navigation', // 网站标题
    description: '导航', // 网站描述
    base: '/navigation/', // 仓库名称作为基础路径
    themeConfig: {
        // 左侧导航配置
        sidebar: [
            {
                title: '编程', // 导航组标题
                collapsable: false, // 是否可折叠
                children: [
                    '/guide/installation', // 对应 docs/guide/installation.md
                    '/guide/configuration'
                ]
            },
            {
                title: '高级功能',
                children: [
                    '/advanced/plugins',
                    '/advanced/theming'
                ]
            }
        ]
    }
}