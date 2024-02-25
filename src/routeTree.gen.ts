/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as CountriesIndexImport } from './routes/countries/index'
import { Route as CountriesSouthAmericaImport } from './routes/countries/south-america'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CountriesIndexRoute = CountriesIndexImport.update({
  path: '/countries/',
  getParentRoute: () => rootRoute,
} as any)

const CountriesSouthAmericaRoute = CountriesSouthAmericaImport.update({
  path: '/countries/south-america',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/countries/south-america': {
      preLoaderRoute: typeof CountriesSouthAmericaImport
      parentRoute: typeof rootRoute
    }
    '/countries/': {
      preLoaderRoute: typeof CountriesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  CountriesSouthAmericaRoute,
  CountriesIndexRoute,
])

/* prettier-ignore-end */
