import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path:'static/header', component: HeaderComponent},
  {path: 'static/footer', component: FooterComponent}
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
