
# .NET 8.0 SSG Vue 3 + Vite + Tailwindcss Template

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/vue-ssg.png)
![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/start/vue-ssg.png)

> Browse [source code](https://github.com/NetCoreTemplates/vue-ssg) and install with [x new](https://docs.servicestack.net/dotnet-new):

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

```bash
$ dotnet tool install -g x

$ x new vue-ssg ProjectName
```

## Getting Started

Build Client UI & Run Dev Server

```bash
$ cd ui && npm run build:local
$ npm run dev
```

Run Server .NET Project (New Terminal)

```bash
$ cd api\ProjectName
$ dotnet watch
```

For more, see development workflow docs for **JetBrains Rider** and **VS Code / VS .NET**

#### Use npm dev server for UI Development

- http://localhost:3000

#### `npm run build:local` to view in .NET App

- https://localhost:5001
