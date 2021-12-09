import { Outlet } from '@router/outlet';
import { FC, useEffect } from 'react';

const One: FC = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div>one</div>
      <div>thw</div>
      <Outlet />
    </>
  );
};
export default One;
