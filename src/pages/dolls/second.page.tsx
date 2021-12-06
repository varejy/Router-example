import { Outlet } from '@router/outlet';
import { FC } from 'react';

const Second: FC = () => {
  return (
    <>
      <div>second</div>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Second;
