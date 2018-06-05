import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrimeService {

  constructor(private http:HttpClient) {}
 
    getTopCrimes() {
      return this.http.get('http://NflArrest.com/api/v1/crime');
    }
    getTopPlayersForCrime() {
      return this.http.get('http://NflArrest.com/api/v1/player/');
    }
    getTopTeamsForCrime() {
      return this.http.get('http://NflArrest.com/api/v1/team/');
    }
}
