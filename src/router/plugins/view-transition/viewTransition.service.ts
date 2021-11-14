import { map, Subject } from 'rxjs';

enum ViewTransitonEvents {
  start = 'start',
  end = 'end',
}
interface EventData {
  event: keyof typeof ViewTransitonEvents;
}

const sb = new Subject<EventData>();
const getEventObj = (evt: keyof typeof ViewTransitonEvents): EventData => {
  return { event: evt };
};

export const viewTransitionService = {
  events: {
    start: () => sb.next(getEventObj(ViewTransitonEvents.start)),
    end: () => sb.next(getEventObj(ViewTransitonEvents.end)),
  },
  observable: {
    state: () => sb.pipe(map((v) => v.event)),
  },
};
