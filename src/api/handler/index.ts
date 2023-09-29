import { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'

export const apiRouter = () => createRouter<NextApiRequest, NextApiResponse>()
