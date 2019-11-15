import { Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { TransactionsComponent } from './components/transactions/transactions.component';



export const ROUTES: Routes = [
  {path: 'player', component: PlayerComponent},
  {path: 'player/:id', component: TransactionsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'player'},
  {path: '**', pathMatch: 'full', redirectTo: 'player'}
];
