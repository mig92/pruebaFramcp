import { Component} from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent{

  id_route: string;

  transactionList:Transaction[] = [];

  constructor( private _playerService:PlayerService, route:ActivatedRoute) {

    this.id_route = route.snapshot.paramMap.get('id');

    console.log(this.id_route);

    this._playerService.getTransactions().subscribe((data: any) =>{
      console.log(data);
      this.transactionList = data;
    });

    }
  }


export class Transaction {

  transactionId: number;
  playerId: number;
  transactionType: number;
  parentTransaction: string;
  transactionDateUTC: any;
  amount:number;

    constructor( ) {


    }

}
