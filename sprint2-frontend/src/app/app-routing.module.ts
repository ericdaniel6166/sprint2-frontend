import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';


export const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'employee-list', component: EmployeeListComponent},
  // {path: '**', component: PageNotFoundComponent},
  // {
  //   path: '**',
  //   redirectTo: '404'
  // }
];
@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, NavBarComponent, FooterComponent]
})
export class AppRoutingModule { }
