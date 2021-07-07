import { tap, map } from 'rxjs/operators';
import { CharacterMain } from './../interfaces/characterMain.interface';
import { Character } from './../interfaces/character.interface';
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsyncSubject, BehaviorSubject, Observable, of, Subject } from "rxjs";

@Injectable({providedIn : "root"})
 export class CharacterService {

  public addNewCharacter = new BehaviorSubject<Character>(null);

  private characters: Character[] = [];

  constructor(private http : HttpClient) {
  }

   public getCharacters() : Observable<Character[]> {
    if(this.characters.length === 0) {
      return this.http.get<CharacterMain>("https://rickandmortyapi.com/api/character").pipe(tap(data => this.characters = data.results), map(data => data.results));
    }
    return of(this.characters);
   }
 }
