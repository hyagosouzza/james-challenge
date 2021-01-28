import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentRoutingModule } from './establishment-routing.module';
import { MainLayoutModule } from '../layout/main-layout/main-layout.module';
import { EstablishmentViewComponent } from './establishment-view/establishment-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { MatSortModule } from '@angular/material/sort';
import { EstablishmentPageComponent } from './establishment-page.component';
import { EstablishmentsComponent } from './establishment/establishments.component';
import { MatListModule } from '@angular/material/list';
import { EstablishmentListItemComponent } from './establishment/establishment-list/establishment-list-item/establishment-list-item.component';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        EstablishmentPageComponent,
        EstablishmentListComponent,
        EstablishmentViewComponent,
        EstablishmentListComponent,
        EstablishmentsComponent,
        EstablishmentListItemComponent
    ],
    imports: [
        CommonModule,
        EstablishmentRoutingModule,
        MainLayoutModule,
        MatTableModule,
        MatIconModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatProgressBarModule,
        MatTooltipModule,
        NgxMaskModule,
        MatSortModule,
        MatListModule,
        FlexModule,
    ],
})
export class EstablishmentModule {
}
