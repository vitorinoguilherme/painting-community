import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './static/header/header.component';
import { ToggleSidebarModule } from '../toggle-sidebar/toggle-sidebar.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ToggleSidebarModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
