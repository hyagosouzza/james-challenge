import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'jc-establishments',
    templateUrl: './establishments.component.html',
    styleUrls: ['./establishments.component.scss']
})
export class EstablishmentsComponent implements OnInit {

    command = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

    refresh() {
        this.command.emit();
    }

}
