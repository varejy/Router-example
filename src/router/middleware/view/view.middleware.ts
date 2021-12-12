// import { RouterDataResolverEvents as RDRE } from '@router/@types/routeDataResolver.type';
import { RouterDataResolverEvents } from '@router/@types/routeDataResolver.type';
import { AppRoutes, AppState } from '@router/@types/routes.type';
import { DoneFn, State } from 'router5/dist/types/base';
import { EMPTY, switchMap } from 'rxjs';
import { componentViewResolver } from './componentViewResolver.service';
import { dataResolverCacheService } from './dataResolverCache.service';
import { routeDataResolver } from './routeDataResolver.service';

export const viewMiddleware =
  (routes: AppRoutes) =>
  () =>
  (toState: State, _fromState: State, done: DoneFn): void => {
    dataResolverCacheService.setRouteName(toState.name);
    routeDataResolver
      .resolve(routes, toState)
      .pipe(
        switchMap((res) => {
          switch (res.event) {
            case RouterDataResolverEvents.routeUndefined:
              console.error(RouterDataResolverEvents.routeUndefined);
              return EMPTY;
            case RouterDataResolverEvents.componentUndefined:
              console.error(RouterDataResolverEvents.componentUndefined);
              return EMPTY;
            case RouterDataResolverEvents.loadingDataError:
              console.error(RouterDataResolverEvents.loadingDataError);
              return EMPTY;
            case RouterDataResolverEvents.resolved:
              return componentViewResolver.resolve(res.data);
            default:
              console.error('Router data resolver: event undefined');
              return EMPTY;
          }
        })
      )
      .subscribe((component) => {
        const newState = toState as AppState;
        newState.component = component!;
        done();
      });
  };
