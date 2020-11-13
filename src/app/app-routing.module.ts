import { CrisisManagementComponent } from './components/crisis-management/crisis-management.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'crisis-list', component: CrisisListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
