import { FC } from 'react';
import { Route, State } from 'router5';
import { Observable } from 'rxjs';

export interface ExtendedRoutes extends Route {
  component: () => Promise<{ default: FC<any> }>;
  resolve?: (param?: Record<string, string>) => Record<string, Observable<any>>;
}
export type AppRoutes = Array<ExtendedRoutes>;
export interface AppState extends State {
  component: FC<any>;
  resolve?: Record<string, any>;
}
