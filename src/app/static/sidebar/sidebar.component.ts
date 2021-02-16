import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { sidebarAnimation, iconAnimation, labelAnimation } from 'src/app/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  sidebarState: string;
  
  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
    this.sidebarService.sidebarStateObservable$.
    subscribe((newState: string) => {
      this.sidebarState = newState;
    })
  }

}
