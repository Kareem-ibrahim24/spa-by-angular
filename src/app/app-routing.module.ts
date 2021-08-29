import { HomeComponent } from './home/home.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { PreventionComponent } from './prevention/prevention.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : "nav" , component : NavbarComponent},
  {path : "about" , component : AboutComponent},
  {path : "footer" , component : FooterComponent},
  {path : "prevention" , component : PreventionComponent},
  {path : "treatment" , component : TreatmentComponent},
  {path : "home" , component : HomeComponent},
  {path : "" , component :HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
