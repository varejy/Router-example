import { User } from '@services/user/user.service';
import { FC } from 'react';

const Third: FC<{ user: User }> = ({ user }) => {
  return (
    <>
      <div>Email: {user.email}</div>
      <div>third</div>
    </>
  );
};
export default Third;
