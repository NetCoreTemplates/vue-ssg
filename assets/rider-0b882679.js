import{_ as r}from"./MarkdownPage.vue_vue_type_script_setup_true_lang-9ab2f56e.js";import{_ as l}from"./tailwindcss-icon-ff4a7f09.js";import{u as a,o as c,d,w as p,b as e,a as u,e as t}from"./app-4ed2a3eb.js";import"./AppBreadcrumb.vue_vue_type_script_setup_true_lang-20ea0690.js";import"./home-60a608b4.js";const h={class:"markdown-body"},m=e("a",{href:"https://www.jetbrains.com/rider/"},[e("img",{src:"https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/rider.svg",class:"sm:float-left mr-8 w-24 h-24",style:{"margin-top":"0"}})],-1),_=e("p",null,[e("a",{href:"https://www.jetbrains.com/rider/"},"JetBrains Rider"),t(" is our recommended IDE for any C# + npm SPA development as it offers a great development UX for both C# and npm projects, including excellent support for TypeScript and popular JavaScript Framework SPA assets like "),e("a",{href:"https://v3.vuejs.org/guide/single-file-component.html"},"Vue SFC’s"),t(".")],-1),g=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/spa/vue-vite-rider-sln.png",class:"sm:float-right w-60 ml-8",style:{"margin-top":"1rem"}})],-1),w=e("h4",null,"Setup Rider IDE",-1),f=e("p",null,"Rider already understands and provides excellent support npm so you’re immediately productive out-of-the-box, the only plugin we’d add is:",-1),y={href:"https://plugins.jetbrains.com/plugin/15321-tailwind-css",class:"text-2xl flex items-center",style:{"text-decoration":"none"}},v=e("span",{class:""},"Tailwind CSS Plugin",-1),b=e("p",null,[t("Which provides provides intelligent support for "),e("a",{href:"https://tailwindcss.com"},"Tailwind CSS"),t(".")],-1),S=e("h4",null,"Setup C# Solution",-1),k=e("p",null,[t("To modify both C# and npm TypeScript projects within the same solution, open the C# "),e("code",null,"/api/ProjectName.sln"),t(" in Rider, then on the Solution Name right-click on the context menu "),e("code",null,"Add > Attach Existing Folder...")],-1),T=e("p",null,[t("Then add the "),e("code",null,"/ui"),t(" folder which will add your UI folder to the solution as seen on the right:")],-1),j=e("p",null,"After this one-time setup you’re ready to begin!",-1),x=e("h3",null,"Start both npm & C# projects",-1),C=e("p",null,[t("To take advantage of "),e("a",{href:"https://vitejs.dev"},"Vite"),t(" excellent Hot Module reload support, we’re now recommending UI development through its dev server which you can do in rider by opening "),e("code",null,"package.json"),t(" and running the "),e("strong",null,"dev"),t(" script:")],-1),A=e("p",null,[e("img",{src:"https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-scripts.png",alt:""})],-1),R=e("p",null,[e("img",{src:"https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-run-myapp.png",class:"sm:float-right w-72",style:{margin:"0 0 0 1rem"}})],-1),D=e("p",null,[t("This launch vite in HMR mode where any changes to "),e("code",null,"/ui"),t(" assets will have immediate effect.")],-1),I=e("p",null,[t("Then to start the back-end C# project, right-click on the Host Project and click "),e("strong",null,"Run"),t(" on the projects context menu.")],-1),P=e("p",null,[t("With both projects started you can open and leave a browser tab running at "),e("code",null,"http://localhost:5173"),t(" where it will automatically reload itself at every "),e("code",null,"Ctrl+S"),t(".")],-1),B=e("p",null,"When you’re ready to preview a development build of the Client UI in your .NET App, run:",-1),N=e("pre",null,[e("code",{class:"language-bash"},`$ npm run build:local
`)],-1),E=e("p",null,[t("Which will publish your Vue 3’s App static assets to the .NET App’s "),e("code",null,"/wwwroot"),t(" where it can be previewed from "),e("code",null,"https://localhost:5001"),t(".")],-1),J=e("h3",null,"Rider’s new Task Runner",-1),U=e("p",null,"In the latest version of Rider, once you run the npm and dotnet tasks after the first time, they will appear in Rider’s new useful task runner widget where you’ll be able to easily, stop and rerun all project tasks:",-1),V=e("p",null,[e("img",{src:"https://github.com/ServiceStack/docs/raw/master/docs/images/spa/rider-run-widget.png",alt:""})],-1),H=e("h3",null,"Start npm & C# projects from the terminal",-1),W=e("p",null,[t("These GUI tasks are just managing running CLI commands behind-the-scenes, which if you prefer you can use JetBrains excellent multi-terminal support to run "),e("code",null,"$ dotnet watch"),t(" and "),e("code",null,"$ npm run dev"),t(" from separate or split Terminal windows:")],-1),G=e("p",null,[e("img",{src:"https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-rider-terminals.png",alt:""})],-1),$=e("h3",null,"Deploying to Production",-1),F=e("p",null,"When you’re ready to deploy your App you can create a production build with:",-1),L=e("pre",null,[e("code",{class:"language-bash"},`$ npm run publish
`)],-1),M=e("p",null,[t("Which will generate production builds of your C# projects and npm projects with its static generated UI assets written to "),e("code",null,"/wwwroot"),t(" to be deployed together with your complete .NET App.")],-1),O=e("p",null,[t("Our recommendation for the best possible responsive UX is to deploy your App’s "),e("code",null,"/wwwwroot"),t(" static assets to a CDN in order for the initial load of your App to be downloaded from nearby CDN edge caches.")],-1),X=e("p",null,[t("To do this configure the production url the UI should use for all its "),e("code",null,"/api"),t(" Ajax requests by modifying "),e("code",null,"DEPLOY_API"),t(" in your "),e("code",null,"vite.config.ts"),t(":")],-1),Y=e("pre",null,[e("code",{class:"language-csharp"},`const DEPLOY_API = 'https://vue-ssg-api.jamstacks.net'
`)],-1),Z=e("p",null,[t("This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, for more info, checkout "),e("a",{href:"/posts/deploy"},"GitHub Actions Deployments"),t(".")],-1),q=e("h3",null,"Get Started",-1),z=e("p",null,"Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of that’s used to power its type-safe & productive intelli-sense dev UX.",-1),K=e("p",null,[t("If you’re new to Vue 3 a good place to start is "),e("a",{href:"https://v3.vuejs.org/api/sfc-script-setup.html"},"Vue 3 composition APIs in SFC")],-1),ae="Develop using JetBrains Rider",ce="Setting up & exploring development workflow in Rider",de="2021-11-23T00:00:00.000Z",pe=[{property:"og:title",content:"Develop using JetBrains Rider"}],ue={__name:"rider",setup(Q,{expose:s}){const o={title:"Develop using JetBrains Rider",summary:"Setting up & exploring development workflow in Rider",date:"2021-11-23T00:00:00.000Z",meta:[{property:"og:title",content:"Develop using JetBrains Rider"}]};return s({frontmatter:o}),a({title:"Develop using JetBrains Rider",meta:[{property:"og:title",content:"Develop using JetBrains Rider"}]}),(te,oe)=>{const n=l,i=r;return c(),d(i,{frontmatter:o},{default:p(()=>[e("div",h,[m,_,g,w,f,e("a",y,[u(n,{class:"sm:float-left w-12 h-12",style:{margin:"0 .5rem 0 0"}}),v]),b,S,k,T,j,x,C,A,R,D,I,P,B,N,E,J,U,V,H,W,G,$,F,L,M,O,X,Y,Z,q,z,K])]),_:1})}}};export{de as date,ue as default,pe as meta,ce as summary,ae as title};
