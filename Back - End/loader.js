const server = require('./api/server')
require('./api/assets/connect')
const router = require('./api/routes/routes')
server.use('/api', router)

