// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                { src: "https://cdn.jsdelivr.net/npm/luckysheet/dist/plugins/js/plugin.js" },
                { src: "https://cdn.jsdelivr.net/npm/luckysheet/dist/luckysheet.umd.js" },
            ],
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/luckysheet/dist/plugins/css/pluginsCss.css' },
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/luckysheet/dist/plugins/plugins.css' },
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/luckysheet/dist/css/luckysheet.css' },
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/luckysheet/dist/assets/iconfont/iconfont.css' },
            ]
        },
    },
})
