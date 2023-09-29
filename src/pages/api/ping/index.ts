import { apiRouter } from '@/api/handler'

export default apiRouter()
  .get((_, res) => {
    res.send('pong')
  })
  .handler()
