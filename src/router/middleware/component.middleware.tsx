import { AppRoutes, AppState } from '@router/routes';
import { DoneFn, State } from 'router5/dist/types/base';

export const componentMiddleware =
  (routes: AppRoutes) =>
  () =>
  (toState: State, _fromState: State, done: DoneFn): void => {
    const lazyComponent = routes.find((r) => r.name === toState.name)?.component;

    if (typeof lazyComponent !== 'function') {
      throw Error(`Component for state: ${toState.name} ${lazyComponent}`);
    }

    lazyComponent()
      .then((module) => {
        const newState = toState as AppState;
        newState.component = module.default;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => done());
  };
