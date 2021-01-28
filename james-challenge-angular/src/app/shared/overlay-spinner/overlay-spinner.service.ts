import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OverlaySpinnerService {

    private _start$ = new Subject<void>();
    startObservable = this._start$.asObservable();

    private _stop$ = new Subject<void>();
    stopObservable = this._stop$.asObservable();

    constructor() {
    }

    start() {
        this._start$.next();
    }

    stop() {
        this._stop$.next();
    }
}
