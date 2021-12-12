import { Outlet } from '@router/@types/outlet.type';
import { User } from '@services/user/user.service';
import { FC } from 'react';

const One: FC<Outlet & { user: User }> = ({ Outlet, user }) => {
  return (
    <>
      <div>Email: {user.email}</div>
      <img width={'96px'} height={'96px'} src={user.avatar} alt="" />
      <Outlet />
    </>
  );
};
export default One;
