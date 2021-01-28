import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/establishments', pathMatch: 'full' },
    {
        path: 'establishments',
        loadChildren: './establishment-page/establishment.module#EstablishmentModule'
    },
    { path: '**', component: PageNotFoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
