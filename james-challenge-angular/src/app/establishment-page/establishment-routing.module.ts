import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentViewComponent } from './establishment-view/establishment-view.component';
import { EstablishmentPageComponent } from './establishment-page.component';
import { EstablishmentsComponent } from './establishment/establishments.component';

const routes: Routes = [
    {
        path: '', component: EstablishmentPageComponent, children: [
            { path: '', component: EstablishmentsComponent },
            { path: 'show', component: EstablishmentViewComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstablishmentRoutingModule {
}
