import { EventData, MapRoutesData, RouterDataResolverEvents as RDRE } from '@router/@types/routeDataResolver.type';
import { AppRoutes } from '@router/@types/routes.type';
import { State } from 'router5';
import { catchError, combineLatestWith, first, forkJoin, map, mergeWith, Observable, of, Subject, zip } from 'rxjs';

class RouteDataResolver {
  resolve(routes: AppRoutes, state: State): Observable<EventData> {
    const stream$ = new Subject<EventData>();
    try {
      const routeNames = this.parseRouteName(state.name);
      const stateRoutes = this.findRoutesByName(routes, routeNames);

      if (stateRoutes.length === 0 || routeNames.length !== stateRoutes.length) {
        stream$.next(this.streamEvent(RDRE.routeUndefined));
        throw Error(RDRE.routeUndefined);
      }
      if (stateRoutes.some((item) => !Boolean(item.component))) {
        stream$.next(this.streamEvent(RDRE.componentUndefined));
        throw Error(RDRE.componentUndefined);
      }

      const { components, data } = this.mapRoutesData(stateRoutes, state);

      return zip(components).pipe(
        combineLatestWith(zip(data)),
        map(([_components, _data]) => {
          return this.streamEvent(
            RDRE.resolved,
            _components.map((module, idx) => {
              return { component: module.default, data: _data[idx] };
            })
          );
        }),
        mergeWith(stream$),
        catchError(() => {
          return of(this.streamEvent(RDRE.loadingDataError));
        }),
        first()
      );
    } catch (error) {
      return stream$.pipe(first());
    }
  }
  private parseRouteName(routeName: string): string[] {
    const names = routeName.split('.');
    const len = names.length;
    if (len < 2) {
      return names;
    }
    let buffer = `${names[0]}`;
    const result: string[] = [buffer];

    for (let i = 1; i < len; i++) {
      buffer += `.${names[i]}`;
      result.push(buffer);
    }
    return result;
  }
  private findRoutesByName(routes: AppRoutes, routeNames: string[]): AppRoutes {
    const filtered = routes.filter((r) => routeNames.includes(r.name));
    return this.mapOrder(filtered, routeNames);
  }
  private mapRoutesData(routes: AppRoutes, state: State): MapRoutesData {
    const components: MapRoutesData['components'] = [];
    const data: MapRoutesData['data'] = [];

    for (let i = 0, len = routes.length; i < len; i++) {
      components.push(routes[i].component());
      const fn = routes[i].resolve;
      const resolve = fn ? fn(state.params) : { __EMPTY__: of(undefined) };

      data.push(forkJoin(resolve));
    }
    return { components, data };
  }
  private mapOrder(array: AppRoutes, order: string[]): AppRoutes {
    array.sort((a, b) => {
      const A = a.name;
      const B = b.name;
      return order.indexOf(A) > order.indexOf(B) ? 1 : -1;
    });
    return array;
  }
  private streamEvent(event: EventData['event'], data?: EventData['data']): EventData {
    return { event, data };
  }
}

export const routeDataResolver = new RouteDataResolver();
