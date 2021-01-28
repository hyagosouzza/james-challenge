import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmationDialogOptions {
    confirmText?: string;
    declineText?: string;
    title?: string;
    message?: string;
}

@Component({
    selector: 'jc-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

    confirmText = 'Yes';
    declineText = 'No';
    title = 'Confirm';
    message?: string;

    constructor(@Inject(MAT_DIALOG_DATA) readonly data: ConfirmationDialogOptions) {
        Object.assign(this, data);
    }

}
