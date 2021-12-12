import { Outlet } from '@router/@types/outlet.type';
import { User } from '@services/user/user.service';
import { FC } from 'react';

const Second: FC<Outlet & { user: User }> = ({ Outlet, user }) => {
  return (
    <>
      <div>Email: {user.email}</div>

      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Second;
