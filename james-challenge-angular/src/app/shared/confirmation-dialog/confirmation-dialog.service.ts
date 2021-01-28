import { Injectable } from '@angular/core';
import { ConfirmationDialogComponent, ConfirmationDialogOptions } from './confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationDialogService {

    constructor(private readonly _dialog: MatDialog) {
    }

    openDialog(options: ConfirmationDialogOptions): Promise<undefined | boolean> {
        return this._dialog.open(ConfirmationDialogComponent, {
            data: options,
            minWidth: '300px',
            width: 'auto',
            disableClose: true,
        }).afterClosed().toPromise();
    }

}
