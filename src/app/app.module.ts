import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PlayerComponent } from './components/player/player.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

import { PlayerService } from './services/player.service';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

import { LOCALE_ID } from '@angular/core';


import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayerComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [PlayerService,
    { provide: LOCALE_ID,useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
