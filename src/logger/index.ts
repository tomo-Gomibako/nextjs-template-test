import { isPrd } from '@/env'
import pino from 'pino'

export const logger = pino({
  level: isPrd() ? 'info' : 'debug',
  browser: {
    // transmit: {
    //   send: async (level, event) => {
    //     switch (level) {
    //       case 'fatal': {
    //         await reportClientCrash(event)
    //       }
    //     }
    //   }
    // }
  }
})
