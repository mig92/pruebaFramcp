import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

//import { Player } from '../components/player/player.component'
//import { Transaction } from '../components/transaction/transaction.component';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) {
    console.log("servicio listo")
  }

  getPlayers(){
    const url = "http://node.test.betserver.es:8081/api/players";
    return this.http.get(url);
  }

  //getNewReleases(){
  //return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
  //}

}
