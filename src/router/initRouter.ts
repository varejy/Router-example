import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { routes } from '../routes';
import { viewMiddleware } from './middleware/view/view.middleware';

export const initRouter = () => {
  const router = createRouter(routes, {
    defaultRoute: '/',
    queryParamsMode: 'loose',
  });
  router.usePlugin(browserPlugin());
  router.useMiddleware(viewMiddleware(routes));

  return router;
};
