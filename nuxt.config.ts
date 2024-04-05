export default defineNuxtConfig({
    devtools: { enabled: true },
    // app: {
    //     head: {
    //         charset: 'utf-8',
    //         title: 'SHP',
    //         meta: [
    //             {name: 'theme-color', content: '#111111'}
    //         ]
    //     }
    // },
    css: [
        "~/assets/style/init.scss",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/style/variables.scss";',
                },
            },
        },
    },
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    // device: {
    //     refreshOnResize: true,
    // },
    components: true,
    build: {
        transpile: [
            '@vuepic/vue-datepicker', 
        ]
    },
    ssr: false,
    

    
    // pages: true,
})