import express from 'express'

import routes from './api/routes/routes'
import middleware from './config/middleware'

const app = express()

middleware(app)
routes(app)

app.listen(8000, () => {
    console.log('Server lintening on port 8000...')
})

export default app