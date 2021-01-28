import { Component } from '@angular/core';

const DEFAULT_PAGE_OPTIONS: ReadonlyArray<PageOption> = [
    {
        icon: 'home',
        tooltip: 'Establishments',
        router: '/establishments',
    },
];

interface PageOption {
    icon: string;
    tooltip: string;
    router: string;
}

@Component({
    selector: 'jc-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

    readonly pages: ReadonlyArray<PageOption> = DEFAULT_PAGE_OPTIONS;

    constructor() {
    }

}
