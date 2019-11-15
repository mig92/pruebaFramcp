import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent{

  playerList:Player[] = [];

    constructor( private _playerService:PlayerService, private router:Router) {


    this._playerService.getPlayers().subscribe((data: any) =>{
      this.playerList = data;
    });

    }

    verTransacciones(index:number){
      this.router.navigate( ['/player', index]);
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
