import { Outlet } from '@router/outlet';
import { FC } from 'react';

const One: FC = () => {
  return (
    <>
      <div>one</div>
      <Outlet />
    </>
  );
};
export default One;
