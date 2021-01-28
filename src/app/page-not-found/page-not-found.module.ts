import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        RouterModule
    ],
})
export class PageNotFoundModule {
}
