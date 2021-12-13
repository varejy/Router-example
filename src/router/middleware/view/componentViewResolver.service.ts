import { EventData, ViewData } from '@router/@types/routeDataResolver.type';
import React, { FC } from 'react';
import { BehaviorSubject, first, Observable } from 'rxjs';

class ComponentViewResolver {
  resolve(data: EventData['data']): Observable<FC<any> | undefined> {
    const stream$ = new BehaviorSubject<FC<any> | undefined>(undefined);

    if (data) {
      const view = this.getView(data);
      stream$.next(function View() {
        return view;
      });
    }

    return stream$.pipe(first());
  }
  private getView(data: EventData['data']): React.ReactElement<any, any> {
    let len = data!.length;
    let view: React.ReactElement<any, any> | undefined;

    while (len--) {
      const item = data![len];
      view = this.resolveView(item, view, len);
    }
    return view!;
  }

  private resolveView(
    item: ViewData,
    view: React.ReactElement<any, any> | undefined,
    idx: number
  ): React.ReactElement<any, any> {
    if (!view) {
      return React.createElement(item.component, { ...item.data, Outlet: () => null } as Record<string, any>, []);
    }

    return React.createElement(
      item.component,
      {
        ...item.data,
        Outlet: () => React.createElement(() => view, { key: `__outlet__${idx}` }, []),
      } as Record<string, any>,
      []
    );
  }
}

export const componentViewResolver = new ComponentViewResolver();
