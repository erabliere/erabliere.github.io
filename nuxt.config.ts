// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    css: ["@/assets/style/style.scss"],
    modules: [
        '@unocss/nuxt'
    ],
    plugins: [{ src: '@/plugins/script.js' }, { src: '@/plugins/inject_post_scripts.js' }],
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
    },
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        webFonts: {
            provider: "google",
            fonts: {
                sans: 'Roboto'
            }
        },
        // core options
        shortcuts: [],
        rules: [],
    },

})
