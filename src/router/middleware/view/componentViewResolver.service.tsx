import { EventData } from '@router/@types/routeDataResolver.type';
import React, { FC } from 'react';
import { BehaviorSubject, first, Observable } from 'rxjs';

class ComponentViewResolver {
  resolve(data: EventData['data']): Observable<FC<any> | undefined> {
    const stream$ = new BehaviorSubject<FC<any> | undefined>(undefined);

    if (data) {
      const view = this.getView(data);
      stream$.next(view);
    }

    return stream$.pipe(first());
  }
  private getView(data: EventData['data']): FC<any> {
    const components = data!.map((view) => {
      return <view.component {...view.data}></view.component>; // TODO: Hot fix hooks
    });
    return this.resolveView(components);
  }

  private resolveView(components: Array<React.ReactElement<any, any> | null>): FC<any> {
    let len = components.length;
    let view: React.ReactElement<any, any> | null = null;
    while (len--) {
      view = this.resolveNestedView(components[len], view);
    }
    return () => view;
  }

  private resolveNestedView(
    component: React.ReactElement<any, any> | null,
    view: React.ReactElement<any, any> | null
  ): React.ReactElement<any, any> | null {
    if (!view) {
      return component;
    }
    return this.resolveOutlet(component, view);
  }
  private resolveOutlet(
    component: React.ReactElement<any, any> | null,
    view: React.ReactElement<any, any> | null
  ): any {
    const children = React.Children.toArray(component!.props.children) as Array<React.ReactElement<any, any>>;
    const len = children.length;
    let outlet: React.FunctionComponentElement<any>;

    for (let i = 0; i < len; i++) {
      const child = children[i];
      if (typeof child !== 'object') {
        continue;
      }
      if (child.type.name === 'Outlet') {
        outlet = React.cloneElement(child, { child: true }, <div key={i}>{view}</div>);
        children.splice(i, 1, outlet);
      } else {
        outlet = this.resolveOutlet(child, view);
        children.splice(i, 1, outlet);
      }
    }
    return React.cloneElement(component!, {}, this.sortChildren(children));
  }
  private sortChildren(children: Array<React.ReactElement<any, any>>): Array<React.ReactElement<any, any>> {
    return children.sort((a, b) => {
      const A = a.key;
      const B = b.key;
      if (A && B) {
        return A > B ? 1 : -1;
      }
      return 0;
    });
  }
}

export const componentViewResolver = new ComponentViewResolver();
