// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    css: ["@/assets/style/style.scss"],
    plugins: [{ src: '@/plugins/script.js' }],
    ssr: false,
    app: {
        head: {
            title: "L'Érablière || Chaque goutte compte",
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            script: [
                {
                    src: "https://polyfill.io/v3/polyfill.min.js?features=es6",
                    async: true
                },
                {
                    src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
                    async: true
                }
            ]
        }
    }
    

})
