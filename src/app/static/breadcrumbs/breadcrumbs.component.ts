import { Component, OnInit } from '@angular/core';

import { 
  Router,
  Event,
  ActivationStart,
  ActivatedRouteSnapshot,
  ActivationEnd,
  NavigationEnd,
  NavigationStart
} from '@angular/router';
import { filter, map, buffer, pluck } from "rxjs/operators";

// Check if an angular router 'Event' is instance of 'NavigationEnd' event
const isNavigationEnd = (ev: Event) => ev instanceof NavigationEnd;

// Check if an angular router 'Event' is intance of 'NavigationEnd' event
const isActivationEnd = (ev: Event) => ev instanceof ActivationEnd;

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
  breadcrumbLoadedData;
  breadcrumbForDisplay;

  constructor(private router: Router) { }

  ngOnInit(): void {
    /*
    navigationEnd$ is trigered once per completed routing event, in other words
    once per loading a component that is the ende of the current route
    */

    const navigationEnd$ = this.router.events.pipe(filter(isNavigationEnd));

    /*
    Here we subscribe to all navigation events, in order to update
    our route 'data', which we will use for the breadcrumb visualization.

    Than we filter the events emitted from the 'router' in such way, that we are only
    taking action upon a completed router event (in other words we are subscribing only for 'ActivationEnd')

    We use pluck to get only the required breadcrumb data

    The buffer operator accumulates all 'data' coming from the router and emmites the accumulated data once
    when a 'NavigationEnd' event passes trough 'navigationEnd$'

    The 'map' in the end is used to reserve the collected data, in order to convert it to more logical
    sequence. Without the revers first we will get the data for the current route, after that for it's parent
    and so on (that is how the ng router works).
    */

    this.router.events
    .pipe(
      filter(isActivationEnd),
      pluck("snapshot"),
      pluck('data'),
      buffer(navigationEnd$),
      map((breadcrumbData: any[]) => breadcrumbData.reverse())
    )
    .subscribe(
      x => {
        this.breadcrumbLoadedData = x;
    });
  }

}
