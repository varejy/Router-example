import { AppRoutes, AppState } from '@router/routes';
import { State } from 'router5';
import { DoneFn } from 'router5/dist/types/base';
import { catchError, EMPTY, forkJoin, take } from 'rxjs';
import { AjaxError } from 'rxjs/ajax';

export const resolveMiddleware =
  (routes: AppRoutes) =>
  () =>
  (toState: State, _fromState: State, done: DoneFn): void => {
    const resolve = routes.find((r) => r.name === toState.name)?.resolve;
    if (!resolve) {
      return done();
    }
    const dependencies = resolve(toState.params);
    forkJoin(dependencies)
      .pipe(
        catchError((err: AjaxError) => {
          console.error(err);
          return EMPTY;
        }),
        take(1)
      )
      .subscribe((resolvedData: Record<string, any>) => {
        const newState = toState as AppState;
        newState.resolve = resolvedData;
        done();
      });
  };
