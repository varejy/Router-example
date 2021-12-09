import { Outlet } from '@router/@types/outlet.type';
import { FC } from 'react';

interface Props extends Outlet {
  data: string;
}
const Second: FC<Props> = ({ Outlet, data }) => {
  return (
    <>
      <div>second</div>
      <div>
        <div>{data}</div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Second;
