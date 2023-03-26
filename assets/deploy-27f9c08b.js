import{_ as s}from"./MarkdownPage.vue_vue_type_script_setup_true_lang-9ab2f56e.js";import{u as r,o as i,d as a,w as u,b as e,e as t}from"./app-4ed2a3eb.js";import"./AppBreadcrumb.vue_vue_type_script_setup_true_lang-20ea0690.js";import"./home-60a608b4.js";const c=e("div",{class:"markdown-body"},[e("h1",null,"ServiceStack GitHub Action Deployments"),e("p",null,[t("The "),e("a",{href:"https://github.com/NetCoreTemplates/vue-ssg/blob/main/.github/workflows/release.yml"},"release.yml"),t(" in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.")]),e("h2",null,"Overview"),e("p",null,[e("code",null,"release.yml"),t(" is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub’s "),e("code",null,"ghcr.io"),t(" docker registry when a GitHub Release is created.")]),e("p",null,[t("GitHub Actions specified in "),e("code",null,"release.yml"),t(" then copy files remotely via scp and use "),e("code",null,"docker-compose"),t(" to run the app remotely via SSH.")]),e("h2",null,[t("What’s the process of "),e("code",null,"release.yml"),t("?")]),e("p",null,[e("img",{src:"https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png",alt:""})]),e("h2",null,"Deployment server setup"),e("p",null,"To get this working, a server needs to be setup with the following:"),e("ul",null,[e("li",null,"SSH access"),e("li",null,"docker"),e("li",null,"docker-compose"),e("li",null,"ports 443 and 80 for web access of your hosted application")]),e("p",null,"This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc."),e("p",null,[t("When setting up your server, you’ll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the "),e("em",null,"private"),t(" SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.")]),e("p",null,[t("To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, "),e("code",null,"nginx-proxy-compose.yml"),t(". This docker-compose file is ready to run and can be copied to the deployment server.")]),e("p",null,[t("For example, once copied to remote "),e("code",null,"~/nginx-proxy-compose.yml"),t(", the following command can be run on the remote server.")]),e("pre",null,[e("code",null,`docker-compose -f ~/nginx-proxy-compose.yml up -d
`)]),e("p",null,"This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates."),e("h3",null,"GitHub Actions secrets"),e("p",null,[t("The "),e("code",null,"release.yml"),t(" uses the following secrets.")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Required Secrets"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"DEPLOY_API")]),e("td",null,"Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server")]),e("tr",null,[e("td",null,[e("code",null,"DEPLOY_USERNAME")]),e("td",null,[t("Username to log in with via SSH e.g, "),e("strong",null,"ubuntu"),t(", "),e("strong",null,"ec2-user"),t(", "),e("strong",null,"root")])]),e("tr",null,[e("td",null,[e("code",null,"DEPLOY_KEY")]),e("td",null,"SSH private key used to remotely access deploy .NET App")]),e("tr",null,[e("td",null,[e("code",null,"LETSENCRYPT_EMAIL")]),e("td",null,"Email required for Let’s Encrypt automated TLS certificates")])])]),e("p",null,"To also enable deploying static assets to a CDN:"),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Optional Secrets"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"DEPLOY_CDN")]),e("td",null,[t("Hostname where static "),e("strong",null,"/wwwroot"),t(" assets should be deployed to")])])])]),e("p",null,[t("These secrets can use the "),e("a",{href:"https://cli.github.com/manual/gh_secret_set"},"GitHub CLI"),t(" for ease of creation. Eg, using the GitHub CLI the following can be set.")]),e("pre",null,[e("code",{class:"language-bash"},`gh secret set DEPLOY_API -b"<DEPLOY_API>"
gh secret set DEPLOY_USERNAME -b"<DEPLOY_USERNAME>"
gh secret set DEPLOY_KEY < key.pem # DEPLOY_KEY
gh secret set LETSENCRYPT_EMAIL -b"<LETSENCRYPT_EMAIL>"
gh secret set DEPLOY_CDN -b"<DEPLOY_CDN>"
`)]),e("p",null,"These secrets are used to populate variables within GitHub Actions and other configuration files."),e("h2",null,"UI Deployment"),e("p",null,[t("The Vue 3 "),e("code",null,"ui"),t(" application is built and deployed to GitHub Pages during the "),e("code",null,"release.yml"),t(" workflow process by committing the result of "),e("code",null,"npm run build"),t(" to "),e("code",null,"gh-pages"),t(" branch in the repository.")]),e("p",null,[t("Variable replacement of "),e("code",null,"$DEPLOY_API"),t(" and "),e("code",null,"$DEPLOY_CDN"),t(" is performed on the following files as a way to coordinate configuration between the "),e("code",null,"ui"),t(" and "),e("code",null,"api"),t(" project.")]),e("ul",null,[e("li",null,[e("code",null,"ui/vite.config.ts"),t(" - Set backend .NET API URL for UI App to use")]),e("li",null,[e("code",null,"ui/post.build.js"),t(" - If exists, run from GitHub Action after "),e("code",null,"npm run build")])]),e("h3",null,"post.build.js"),e("p",null,[t("The "),e("code",null,"post.build.js"),t(" script helps when also publishing "),e("code",null,"/ui"),t(" assets to CDN by first copying the generated "),e("code",null,"index.html"),t(" home page into "),e("code",null,"404.html"),t(" in order to enable full page reloads to use SPA client routing:")]),e("pre",null,[e("code",{class:"language-js"},`import * as fs from "fs"
import * as path from "path"

// Replaced in release.yml with GitHub Actions secrets
const DEPLOY_API = 'https://$DEPLOY_API'
const DEPLOY_CDN = 'https://$DEPLOY_CDN'

const DIST = '../api/Jamstacks/wwwroot'

// 404.html SPA fallback (supported by GitHub Pages, Cloudflare & Netlify CDNs)
fs.copyFileSync(
    path.resolve(\`\${DIST}/index.html\`),
    path.resolve(\`\${DIST}/404.html\`))

// Define Virtual Host for GitHub Pages CDN
fs.writeFileSync(\`\${DIST}/CNAME\`, DEPLOY_CDN)

// Define /api proxy routes (supported by Cloudflare or Netlify CDNs)  
fs.writeFileSync(\`\${DIST}/_redirects\`,
    fs.readFileSync(\`\${DIST}/_redirects\`, 'utf-8')
        .replace(/{DEPLOY_API}/g, DEPLOY_API))
`)]),e("p",null,[t("Whilst the "),e("code",null,"_redirects"),t(" file is a convention supported by many "),e("a",{href:"https://jamstack.wtf/#deployment"},"popular Jamstack CDNs"),t(" that sets up a new rule that proxies "),e("code",null,"/api*"),t(" requests to where the production .NET App is deployed to in order for API requests to not need CORS:")]),e("pre",null,[e("code",null,`/api/*  {DEPLOY_API}/api/:splat  200
`)]),e("p",null,[t("By default this template doesn’t use the "),e("code",null,"/api"),t(" proxy route & makes CORS API requests so it can be freely hosted on GitHub pages CDN.")]),e("h2",null,"Pushing updates and rollbacks"),e("p",null,[t("By default, deployments of both the "),e("code",null,"ui"),t(" and "),e("code",null,"api"),t(" occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose. Your Vue UI is built and pushed to the repository GitHub Pages.")]),e("p",null,"The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases."),e("p",null,[t("Additionally, the "),e("code",null,"release.yml"),t(" workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases. A release must have already been created for the rollback build to work, it doesn’t create a new Docker build based on previous code state, only redeploys as existing Docker image.")]),e("h2",null,"No CORS Hosting Options"),e("p",null,[t("The "),e("code",null,"CorsFeature"),t(" needs to be enabled when adopting our recommended deployment configuration of having static "),e("code",null,"/wwwroot"),t(" assets hosted from a CDN in order to make cross-domain requests to your .NET APIs.")]),e("h3",null,"Using a CDN Proxy"),e("p",null,[t("Should you want to, our recommended approach to avoid your App making CORS requests is to define an "),e("code",null,"/api"),t(" proxy route on your CDN to your "),e("code",null,"$DEPLOY_API"),t(" server.")]),e("p",null,[t("To better support this use-case, this template includes populating the "),e("code",null,"_redirects"),t(" file used by popular CDNs like "),e("a",{href:"https://developers.cloudflare.com/pages/platform/redirects"},"Cloudflare proxy redirects"),t(" and "),e("a",{href:"https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service"},"Netlify proxies"),t(" to define redirect and proxy rules. For AWS CloudFront you would need to define a "),e("a",{href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html"},"Behavior for a custom origin"),t(".")]),e("h3",null,"No CDN"),e("p",null,[t("Of course the easiest solution is to not need CORS in the first place by not deploying to a CDN and serving both "),e("code",null,"/api"),t(" and UI from your .NET App. But this would forgo all the performance & UX benefits that has made "),e("a",{href:"https://jamstack.org"},"Jamstack"),t(" approach so popular.")])],-1),w="Deployment with GitHub Actions",D="Configuring your GitHub repo for SSH and CDN deployments",S="2021-11-21T00:00:00.000Z",A=[{property:"og:title",content:"Deployment with GitHub Actions"}],k={__name:"deploy",setup(d,{expose:l}){const o={title:"Deployment with GitHub Actions",summary:"Configuring your GitHub repo for SSH and CDN deployments",date:"2021-11-21T00:00:00.000Z",meta:[{property:"og:title",content:"Deployment with GitHub Actions"}]};return l({frontmatter:o}),r({title:"Deployment with GitHub Actions",meta:[{property:"og:title",content:"Deployment with GitHub Actions"}]}),(h,m)=>{const n=s;return i(),a(n,{frontmatter:o},{default:u(()=>[c]),_:1})}}};export{S as date,k as default,A as meta,D as summary,w as title};
