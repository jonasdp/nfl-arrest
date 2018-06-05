import { Component } from '@angular/core';
import { CrimeService } from './crime.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public crimes
  public players;
  public teams;
  title = 'NFL Crimes';
  constructor(private _crimeService: CrimeService) { }

  ngOnInit() {
    this.getTopCrimes();
    this.getTopPlayersForCrime();
    this.getTopTeamsForCrime();
  }
  
  getTopCrimes() {
     this._crimeService.getTopCrimes().subscribe(
        data => { this.crimes = data},
        err => console.error(err),
        () => console.log('done loading top crimes')
      );  
    }
    getTopPlayersForCrime() {
      this._crimeService.getTopPlayersForCrime().subscribe(
         data => { this.players = data},
         err => console.error(err),
         () => console.log('done loading top crimes')
       );  
     }
     getTopTeamsForCrime() {
      this._crimeService.getTopTeamsForCrime().subscribe(
         data => { this.teams = data},
         err => console.error(err),
         () => console.log('done loading top crimes')
       );  
     }
}
