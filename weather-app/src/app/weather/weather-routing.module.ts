import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteComponent, HomeComponent, RecentSearchComponent } from './components';
import { NoDataFoundComponent } from '../shared/components';

const routes: Routes = [
    {
        path: '', children: [
            { path: '', pathMatch: 'full', redirectTo: '/home' },
            { path: 'home', component: HomeComponent },
            { path: 'favourite', component: FavouriteComponent },
            { path: 'recent-search', component: RecentSearchComponent },
            { path: '**', component: NoDataFoundComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherRoutingModule { }
