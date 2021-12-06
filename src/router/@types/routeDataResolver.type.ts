import { FC } from 'react';
import { Observable } from 'rxjs';
import { AppState, ExtendedRoutes } from './routes.type';

export enum RouterDataResolverEvents {
  routeUndefined = 'routeUndefined',
  componentUndefined = 'componentUndefined',
  resolved = 'resolved',
  loadingDataError = 'loadingDataError',
}
export interface ViewData {
  component: FC<any>;
  data: Pick<AppState, 'resolve'>;
}
export interface EventData {
  event: keyof typeof RouterDataResolverEvents;
  data?: Array<ViewData>;
}
export interface MapRoutesData {
  components: Array<ReturnType<ExtendedRoutes['component']>>;
  data: Array<Observable<Record<string, any>>>;
}
