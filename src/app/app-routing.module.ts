import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedHomeComponent } from './loggedHome/loggedHome.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loggedHome', component: LoggedHomeComponent }
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
