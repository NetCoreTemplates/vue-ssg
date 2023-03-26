import "@/styles/index.css"
import "@/styles/main.css"
import { ViteSSG } from "vite-ssg"

// Auto generated routes by https://github.com/hannoeru/vite-plugin-pages 
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "~pages"

import App from "@/App.vue"
import { configRouter } from "@/routing"
import { client } from "@/api"

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
    App,
    { routes },
    (ctx) => {
        configRouter(ctx.router)

        ctx.app.provide('client',client)
        
        // install all modules under `modules/`
        Object.values(import.meta.globEager('./modules/*.ts')).map(i => (i as any).install?.(ctx))
    },
)