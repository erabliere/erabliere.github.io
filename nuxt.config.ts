// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    css: ["@/assets/style/style.scss"],
    plugins: [{ src: '@/plugins/script.js' }],
    router: {
        base: '/erabliere.github.io/'
    },
    generate: {
        dir: 'public'
    },
    build: {
        publicPath: 'public/'
    },
    
    ssr: false
})
