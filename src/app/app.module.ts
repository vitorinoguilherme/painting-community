import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { MatSliderModule, MatSlide } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

// MatDividerModule,
// MatListModule,
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { LoggedHomeComponent } from './loggedHome/loggedHome.component';
import { BreadcrumbsComponent } from './static/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { ToggleSidebarComponent } from './static/toggle-sidebar/toggle-sidebar.component';
import { HomeContentComponent } from './home/home-content/home-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoggedHomeComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    ToggleSidebarComponent,
    HomeContentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
