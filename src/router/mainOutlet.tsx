import { FC } from 'react';
import { useRoute } from 'react-router5';
import { AppState } from './@types/routes.type';

export const MainOutlet: FC = () => {
  const { route } = useRoute();
  const appRoute = route as AppState;
  if (appRoute) {
    return <appRoute.component />;
  } else {
    return null;
  }
};
