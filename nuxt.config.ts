// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    css: ["@/assets/style/style.scss"],
    plugins: [{ src: '@/plugins/script.js' }],
    ssr: false,
    head: {
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }

})
