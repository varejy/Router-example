import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { componentMiddleware } from './middleware/component.middleware';
import { routes } from '../routes';
import { resolveMiddleware } from './middleware/resolve.middleware';
import { viewTransitionPlugin } from './plugins/view-transition/viewTransition.plugin';

export const initRouter = () => {
  const router = createRouter(routes, {
    defaultRoute: '/',
    queryParamsMode: 'loose',
  });
  router.usePlugin(browserPlugin(), viewTransitionPlugin);
  router.useMiddleware(resolveMiddleware(routes), componentMiddleware(routes));

  return router;
};
