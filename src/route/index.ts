import { Primitive } from '@/type'
import { match } from 'ts-pattern'

type QueryValue = Primitive

type Query = Record<string, QueryValue | undefined>

export const enum RouteName {
  top = '/'
}

const queryString = (query?: Query): string => {
  const qs = Object.entries(query ?? {})
    .filter((entry): entry is [string, QueryValue] => !!entry[1])
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`
    )
    .join('&')

  return qs ? '?' + qs : qs
}

type RouteUrlOption = {
  // args?: string | string[]
  query?: Query
}

type ConcatUrlOption = {
  baseUrl?: string
  query?: string
}

const concatUrl = (path: string, option: ConcatUrlOption = {}) => {
  const { baseUrl = '', query = '' } = option
  return `${baseUrl}${path}${query}`
}

export const routeUrl = (routeName: RouteName, option: RouteUrlOption = {}) => {
  const { query = {} } = option
  // const innerArgs = typeof args === 'string' ? [args] : args

  const path = match(routeName)
    .with(RouteName.top, () => `/`)
    .exhaustive()

  return concatUrl(path, {
    query: queryString(query)
  })
}
