import ServiceStackVue from "@servicestack/vue"
import { UserModule } from "@/types"

export const install: UserModule = ({ app }) => {
  app.use(ServiceStackVue)
}
