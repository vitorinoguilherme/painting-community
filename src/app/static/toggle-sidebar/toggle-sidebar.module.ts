import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSidebarComponent } from './toggle-sidebar.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ToggleSidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    ToggleSidebarComponent,
  ]
})
export class ToggleSidebarModule { }
