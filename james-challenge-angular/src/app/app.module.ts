import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from './shared/shared.module';
import { EstablishmentModule } from './establishment-page/establishment.module';
import { NgxMaskModule } from 'ngx-mask';
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';

registerLocaleData(localept, 'pt');

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PageNotFoundModule,
        MatSnackBarModule,
        SharedModule,
        EstablishmentModule,
        NgxMaskModule.forRoot(),
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1000 * 3 } },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
