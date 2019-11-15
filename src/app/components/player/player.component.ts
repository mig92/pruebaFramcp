import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerList:Player[] = [];

    constructor( private _playerService:PlayerService, private router:Router) {


    this._playerService.getPlayers().subscribe((data: any) =>{
      this.playerList = data;
      console.log(this.playerList);
    })

    }

  ngOnInit() {
  }

}

export class Player {
  playerId: number;
  userName: string;
  password: string;
  fullName: string;
  registrationDateUTC: any;
  transactions:any [];

    constructor( ) {

    }

}
