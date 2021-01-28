import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaySpinnerComponent } from './overlay-spinner/overlay-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [OverlaySpinnerComponent, ConfirmationDialogComponent],
    exports: [
        OverlaySpinnerComponent
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        MatDividerModule,
    ]
})
export class SharedModule {
}
