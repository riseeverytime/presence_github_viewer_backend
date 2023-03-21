import { app } from "./app"

import { appConfig } from "./config"

app.listen(appConfig.port, () => {
	console.log(`App started on ${appConfig.port}`)
})
