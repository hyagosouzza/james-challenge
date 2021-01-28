import { Component } from '@angular/core';
import { OverlaySpinnerService } from './overlay-spinner.service';

@Component({
    selector: 'jc-overlay-spinner',
    templateUrl: './overlay-spinner.component.html',
    styleUrls: ['./overlay-spinner.component.scss']
})
export class OverlaySpinnerComponent {

    loading = false;

    constructor(private readonly _spinnerService: OverlaySpinnerService) {
        this._initStartSubscribe();
        this._initStopSubscribe();
    }

    private _initStartSubscribe() {
        this._spinnerService.startObservable.subscribe(() => this.loading = true);
    }

    private _initStopSubscribe() {
        this._spinnerService.stopObservable.subscribe(() => this.loading = false);
    }

}
