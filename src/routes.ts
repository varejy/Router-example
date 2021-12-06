import { AppRoutes } from '@router/@types/routes.type';
import { userService } from '@services/user/user.service';

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
  },
  {
    name: 'one.second.third',
    path: '/third',
    component: () => import('@pages/dolls/third.page'),
  },
];
