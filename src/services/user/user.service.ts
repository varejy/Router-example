import { Collection } from '@services/@types/collection.type';
import { first, map, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const domain = process.env.REACT_APP_API;

class UserService {
  getUserList(page = 1): Observable<UserList> {
    return ajax.get<UserList>(`${domain}/api/users?page=${page}`).pipe(
      first(),
      map((res) => {
        return res.response;
      })
    );
  }
  getUserById(id: number): Observable<User> {
    return ajax.get<{ data: User }>(`${domain}/api/users/${id}`).pipe(
      first(),
      map((res) => res.response.data)
    );
  }
}

export const userService = new UserService();

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export type UserList = Collection<User>;
