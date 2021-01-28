import { Injectable } from '@angular/core';
import { Establishment, EstablishmentService } from 'james-challenge-client/dist';
import { Observable, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { sortBy } from 'lodash';

const ESTABLISHMENTS_KEY = 'jc.establishments';

@Injectable({
    providedIn: 'root'
})
export class EstablishmentApiService {

    constructor(private readonly _establishmentService: EstablishmentService,
                private readonly _snackBarService: MatSnackBar) {
    }

    findAll(): Observable<Establishment[]> {
        const establishments = this._getEstablishmentsFromStorage();
        if (establishments) {
            return of(establishments);
        } else {
            return this._preLoadEstablishments();
        }
    }

    getById(id: string): Establishment | undefined {
        const establishments = this._getEstablishmentsFromStorage();
        return establishments.find(establishment => establishment.id === id);
    }

    update(establishment: Establishment): Establishment {
        let establishments = this._getEstablishmentsFromStorage();
        establishments = establishments.filter(e => e.id !== establishment.id);
        this._setEstablishments([...establishments, establishment]);

        return establishment;
    }

    private _getEstablishmentsFromStorage(): Establishment[] | null {
        const establishments = localStorage.getItem(ESTABLISHMENTS_KEY);
        if (establishments && establishments.trim().length) {
            return JSON.parse(establishments) as Establishment[];
        }

        return null;
    }

    private _preLoadEstablishments(): Observable<Establishment[]> {
        return this._establishmentService.findAll().pipe(
                retry(2),
                catchError(err => {
                    this._snackBarService.open('An error occurred while obtaining the establishments');
                    throw err;
                }),
                map((establishments: Establishment[]) => {
                    sortBy(establishments, 'name');
                    this._setEstablishments(establishments);
                    return establishments;
                })
        );
    }

    private _setEstablishments(establishments: Establishment[]): void {
        localStorage.setItem(ESTABLISHMENTS_KEY, JSON.stringify(sortBy(establishments, [e => e.name.toLowerCase()])));
    }

}
