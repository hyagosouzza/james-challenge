import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Establishment } from 'james-challenge-client/dist';
import { AbstractDatasource } from '../../../datasource/abstract.datasource';
import { EstablishmentApiService } from '../../service/establishment-api.service';
import { catchError, map, retry, startWith } from 'rxjs/operators';

export class EstablishmentDatasource extends AbstractDatasource<Establishment> {

    private readonly _establishmentApiService?: EstablishmentApiService;
    private readonly _snackBarService?: MatSnackBar;

    constructor(
            filter: Observable<void>,
            establishmentApiService: EstablishmentApiService,
            snackBarService: MatSnackBar
    ) {
        super();
        this._establishmentApiService = establishmentApiService;
        this._snackBarService = snackBarService;
        this._searcher(filter);
    }

    private _searcher(command: Observable<void>): void {
        command.pipe(
                startWith({}),
                retry(2),
                map(async () => {
                    this.loadingIndicator = true;
                    this.data = await this._establishmentApiService.findAll().toPromise();
                    this.loadingIndicator = false;
                }),
                catchError(err => {
                            this._snackBarService.open('An error occurred while obtaining the establishments');
                            throw err;
                        }
                )
        ).subscribe();
    }

}
