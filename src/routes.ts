import { userService } from '@services/user/user.service';
import { FC } from 'react';
import { Route, State } from 'router5';
import { Observable } from 'rxjs';

export const routes: AppRoutes = [
  {
    name: 'users',
    path: '/',
    component: () => import('@pages/users/users.page'),
    resolve: () => {
      return {
        userList: userService.getUserList(),
      };
    },
  },
  {
    name: 'user',
    path: '/users/:userId',
    component: () => import('@pages/user/user.page'),
    resolve: (param) => {
      return {
        user: userService.getUserById(parseInt(param!.userId)),
      };
    },
  },
];

interface ExtendedRoutes extends Route {
  component: () => Promise<{ default: FC<any> }>;
  resolve?: (param?: Record<string, string>) => Record<string, Observable<any>>;
}
export type AppRoutes = Array<ExtendedRoutes>;
export interface AppState extends State {
  component: FC<any>;
  resolve?: Record<string, any>;
}
