import { viewTransitionService } from './viewTransition.service';

export const viewTransitionPlugin = () => ({
  onTransitionStart: () => viewTransitionService.events.start(),
  onTransitionCancel: () => viewTransitionService.events.end(),
  onTransitionError: () => viewTransitionService.events.end(),
  onTransitionSuccess: () => viewTransitionService.events.end(),
});
