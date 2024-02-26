/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as CountriesIndexImport } from './routes/countries/index'
import { Route as CitiesIndexImport } from './routes/cities/index'
import { Route as CountriesSouthAmericaImport } from './routes/countries/south-america'
import { Route as CitiesSouthAmericaImport } from './routes/cities/south-america'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CountriesIndexRoute = CountriesIndexImport.update({
  path: '/countries/',
  getParentRoute: () => rootRoute,
} as any)

const CitiesIndexRoute = CitiesIndexImport.update({
  path: '/cities/',
  getParentRoute: () => rootRoute,
} as any)

const CountriesSouthAmericaRoute = CountriesSouthAmericaImport.update({
  path: '/countries/south-america',
  getParentRoute: () => rootRoute,
} as any)

const CitiesSouthAmericaRoute = CitiesSouthAmericaImport.update({
  path: '/cities/south-america',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cities/south-america': {
      preLoaderRoute: typeof CitiesSouthAmericaImport
      parentRoute: typeof rootRoute
    }
    '/countries/south-america': {
      preLoaderRoute: typeof CountriesSouthAmericaImport
      parentRoute: typeof rootRoute
    }
    '/cities/': {
      preLoaderRoute: typeof CitiesIndexImport
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
  CitiesSouthAmericaRoute,
  CountriesSouthAmericaRoute,
  CitiesIndexRoute,
  CountriesIndexRoute,
])

/* prettier-ignore-end */
