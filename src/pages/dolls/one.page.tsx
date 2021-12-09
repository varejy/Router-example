import { Outlet } from '@router/@types/outlet.type';
import { FC, useEffect } from 'react';

const One: FC<Outlet> = ({ Outlet }) => {
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
