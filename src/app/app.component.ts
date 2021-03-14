import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainContentAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    mainContentAnimation(),
  ]
})

export class AppComponent implements OnInit {
  title = 'painting-community';
  sidebarState: string;

  constructor(
    private sidebarService: SidebarService,
  ) {}

  ngOnInit() {
    window.scrollTo(0,0);

    this.sidebarService.sidebarStateObservable$
    .subscribe((newState: string) => {
      this.sidebarState = newState;
    })
  }
}
