import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EstablishmentDatasource } from './establishment.datasource';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EstablishmentApiService } from '../../service/establishment-api.service';

@Component({
    selector: 'jc-establishment-list',
    templateUrl: './establishment-list.component.html',
    styleUrls: ['./establishment-list.component.scss']
})
export class EstablishmentListComponent implements OnInit {

    @Input() filter: Observable<void>;
    @Output() refresh = new EventEmitter();

    dataSource?: EstablishmentDatasource;

    constructor(private readonly _establishmentApiService: EstablishmentApiService,
                private readonly _snackBarService: MatSnackBar) {
    }

    ngOnInit() {
        this._buildDatasource();
    }

    private _buildDatasource() {
        if (this.filter) {
            this.dataSource = new EstablishmentDatasource(this.filter, this._establishmentApiService, this._snackBarService);
        }
    }

}
