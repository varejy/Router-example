import { FC, useEffect, useState } from 'react';
import { useRoute } from 'react-router5';
import styled, { css, keyframes } from 'styled-components';
import { viewTransitionService } from './plugins/view-transition/viewTransition.service';
import { AppState } from '../routes';

const blurViewForwards = keyframes`
0%
{filter: blur(0)}
100%
{filter: blur(5px)}
`;
const blurViewBackwards = keyframes`
0%
{filter: blur(5px)}
100%
{filter: blur(0)}
`;
const styledMain = css<{ transition: boolean }>`
  animation: ${(props) => (props.transition ? blurViewForwards : blurViewBackwards)} 0.4s forwards;
`;
const Main = styled.main<{ transition: boolean }>`
  ${styledMain}
`;

export const Outlet: FC = () => {
  const { route } = useRoute();
  const appRoute = route as AppState;
  const [viewTransition, setViewTransition] = useState<boolean>(false);
  useEffect(() => {
    viewTransitionService.observable.state().subscribe((state) => {
      if (state === 'start') {
        setViewTransition(true);
      } else {
        setViewTransition(false);
      }
    });
  }, []);
  return (
    <Main transition={viewTransition}>
      <appRoute.component {...appRoute.resolve} />
    </Main>
  );
};
