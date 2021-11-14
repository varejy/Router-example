## Router example
## Install dependencies
`docker-compose -f docker-compose.install.yml up` 
## Run app
`docker-compose -f docker-compose.app.yml up`

open `http://localhost:3000/`
## Files that need attention
#### [routes.ts](https://github.com/bugaro/Router-example/blob/master/src/router/routes.ts)
#### [component.middleware.tsx](https://github.com/bugaro/Router-example/blob/master/src/router/middleware/component.middleware.tsx)
#### [resolve.middleware.ts](https://github.com/bugaro/Router-example/blob/master/src/router/middleware/resolve.middleware.ts)
#### [App.tsx](https://github.com/bugaro/Router-example/blob/master/src/App.tsx)
#### [outlet.tsx](https://github.com/bugaro/Router-example/blob/master/src/router/outlet.tsx)