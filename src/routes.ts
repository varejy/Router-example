import { AppRoutes } from '@router/@types/routes.type';
import { userService } from '@services/user/user.service';
import { of } from 'rxjs';

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
  {
    name: 'one',
    path: '/one',
    component: () => import('@pages/dolls/one.page'),
  },
  {
    name: 'one.second',
    path: '/second',
    component: () => import('@pages/dolls/second.page'),
    resolve: () => {
      return {
        data: of('Hi from resolver'),
      };
    },
  },
  {
    name: 'one.second.third',
    path: '/third',
    component: () => import('@pages/dolls/third.page'),
  },
];
