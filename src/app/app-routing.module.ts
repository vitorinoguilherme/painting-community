import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedHomeComponent } from './loggedHome/loggedHome.component';


const routes: Routes = [
  { 
    path: "", 
    children: [ 
      {
        path: '', 
        pathMatch: "full", 
        redirectTo: "home", 
      },
      { 
        path: 'home', 
        component: HomeComponent, 
        data: { 
            breadcrumb: null
        },
        children: [
          { 
            path: 'loggedHome', 
            component: LoggedHomeComponent,
            data: { 
              breadcrumb: 'Logged Home'
            } 
          }
        ] },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
