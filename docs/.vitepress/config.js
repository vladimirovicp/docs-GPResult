const ourStorySidebar = [{ text: 'Our Story', link: '/about/our-story'}]

module.exports = {
    lang: 'ru-RU',
    title: 'GPResult',
    head: [
        ['link', 
            { 
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico' 
            }
        ]
    ],
    themeConfig: {
        // параметры темы
        nav: [
            {text: 'Главная', link: '/'},
            { text: 'Документация', link: '/doc/'},
            { text: 'Участники', link: '/contributions/'}
        ],
    },
}