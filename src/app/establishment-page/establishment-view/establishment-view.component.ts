import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlaySpinnerService } from '../../shared/overlay-spinner/overlay-spinner.service';
import { Establishment } from 'james-challenge-client/dist';
import { notBlankValidator } from '../../util/validators';
import { EstablishmentApiService } from '../service/establishment-api.service';

const buildFormControl = (establishment?: Establishment): FormGroup => {
    if (!establishment) {
        return;
    }
    return new FormGroup({
        id: new FormControl(establishment.id, [Validators.required, notBlankValidator()]),
        index: new FormControl(establishment.index, Validators.required),
        guid: new FormControl(establishment.guid, [Validators.required, notBlankValidator()]),
        picture: new FormControl(establishment.picture, [Validators.required, notBlankValidator()]),
        name: new FormControl(establishment.name, [Validators.required, notBlankValidator()]),
        email: new FormControl(establishment.email, [Validators.required, Validators.email, notBlankValidator()]),
        phone: new FormControl(establishment.phone, [Validators.required, notBlankValidator()]),
        address: new FormControl(establishment.address, [Validators.required, notBlankValidator()]),
        registered: new FormControl(establishment.registered, [Validators.required, notBlankValidator()]),
        latitude: new FormControl(establishment.latitude, [Validators.required, notBlankValidator()]),
        longitude: new FormControl(establishment.longitude, [Validators.required, notBlankValidator()]),
    });
};

@Component({
    selector: 'jc-establishment-view',
    templateUrl: './establishment-view.component.html',
    styleUrls: ['./establishment-view.component.scss']
})
export class EstablishmentViewComponent {

    title = '';

    establishmentForm?: FormGroup;

    constructor(private readonly _route: ActivatedRoute,
                private readonly _establishmentApiService: EstablishmentApiService,
                private readonly _router: Router,
                private readonly _snackBarService: MatSnackBar,
                private readonly _spinnerService: OverlaySpinnerService) {
        const extras = _router.getCurrentNavigation().extras;
        if (extras && extras.state) {
            this._fetchEstablishment(extras.state.id);
        } else {
            this.backToList();
        }
    }

    private _fetchEstablishment(id: string) {
        if (id) {
            this._spinnerService.start();
            try {
                const establishment = this._establishmentApiService.getById(id);
                this.title = establishment.name;
                this._initForm(establishment);
            } catch (e) {
                this._snackBarService.open('An error occurred while obtaining the establishment');
                throw e;
            } finally {
                this._spinnerService.stop();
            }
        }
    }

    private _initForm(establishment?: Establishment) {
        this.establishmentForm = buildFormControl(establishment);
    }

    submit() {
        this._spinnerService.start();
        try {
            const establishment = this._establishmentApiService.update(this.establishmentForm.value);
            this._finish(establishment);
        } catch (e) {
            this._snackBarService.open('An error occurred while update the establishment');
            throw e;
        } finally {
            this._spinnerService.stop();
        }
    }

    private _finish(establishment: Establishment) {
        this._snackBarService.open('Establishment ' + establishment.name + ' updated');
        this.backToList();
    }

    formControl(fieldName: string) {
        return this.establishmentForm.get(fieldName);
    }

    private _hasError(fieldName: string): boolean {
        const control = this.formControl(fieldName);
        return (control.touched || control.dirty) && control.invalid;
    }

    private _hasValidation(fieldName: string, validationName: string) {
        if (this._hasError(fieldName)) {
            return this.formControl(fieldName).getError(validationName);
        }
    }

    requiredValidation(fieldName: string): boolean {
        if (this._hasError(fieldName)) {
            return this._hasValidation(fieldName, 'notBlank');
        }
    }

    emailValidation(fieldName: string): boolean {
        if (this._hasError(fieldName)) {
            return this._hasValidation(fieldName, 'email');
        }
    }

    backToList(): void {
        this._router.navigate(['/establishments']);
    }

}
