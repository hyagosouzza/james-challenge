import { Component, Input } from '@angular/core';
import { Establishment } from 'james-challenge-client/dist';
import { Router } from '@angular/router';

@Component({
    selector: 'jc-establishment-list-item',
    templateUrl: './establishment-list-item.component.html',
    styleUrls: ['./establishment-list-item.component.scss']
})
export class EstablishmentListItemComponent {

    @Input() establishment?: Establishment;

    constructor(private readonly _router: Router) {
    }

    edit(): void {
        if (this.establishment && this.establishment.id) {
            this._router.navigateByUrl('/establishments/show', { state: { id: this.establishment.id } });
        }
    }

}
