import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


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

  getTransactions(){
    const url = "http://node.test.betserver.es:8081/api/players/87787783";

    return this.http.get(url).pipe( map( data => data['transactions']));

  }

}
