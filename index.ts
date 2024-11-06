import { laikaTokenAddy } from "./config"
import { getNotification } from "./utils/web3services"

const main = async () => {
  let res = await getNotification(laikaTokenAddy)
}

main()