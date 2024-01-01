import { NextRequest, NextResponse } from 'next/server'

export type ApiRoute<T extends Response = Response> = (
  req: NextRequest,
  res: NextResponse
) => T | Promise<T>
