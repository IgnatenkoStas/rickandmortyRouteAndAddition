import { Character } from './../../interfaces/character.interface';
import { Observable, Subscription } from 'rxjs';
import { Location } from './../../interfaces/location.interface';
import { LocationService } from './../../services/location.service';
import { EpisodeService } from './../../services/episodes.service';
import { CharacterService } from './../../services/characters.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {map} from 'rxjs/operators'
import { Episode } from './../../interfaces/episode.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './character-collection.component.html',
  styleUrls: ['./character-collection.component.css']
})
export class CharacterCollectionComponent implements OnInit, OnDestroy {
  public charactersResult: Character[];
  public fullCharactersResult: Character[];
  public episodesResult: Observable<Episode[]>;
  public locationsResult: Observable<Location[]>;

  public isEpisodes: boolean = true;
  public isLocations: boolean = false;
  public isSelect: boolean = false;


private subs: Subscription;
  private flag: boolean = false;

  constructor(
    private router: Router,
    private characterService: CharacterService,
    private episodeService: EpisodeService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.getCharacters();
    this.getEpisodes();
    this.getLocations();

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const character: Character = this.characterService.addNewCharacter.getValue();
    if (character) {
        let lastCharacter: Character = this.fullCharactersResult[this.fullCharactersResult.length - 1];
        character.id = lastCharacter.id + 1;
        this.charactersResult.push(character);
        this.characterService.addNewCharacter.next(null);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }

  public getLocations(): void {
    this.locationsResult = this.locationService.getLocations().pipe(map(data => data.results));
  }

  public getEpisodes(): void {
    this.episodesResult = this.episodeService.getEpisodes().pipe(map(data => data.results));
  }

  public getCharacters(): void {
    this.characterService.getCharacters().subscribe( data => {
      this.charactersResult = data;
      this.fullCharactersResult = data;
     });

  }

  public switchToEpisodes(): void {
    this.isEpisodes = true;
    this.isLocations = false;
  }

  public switchToLocations(): void {
    this.isEpisodes = false;
    this.isLocations = true;
  }

  public selectEpisodeItem(object: Episode): void {
    let arrOfCharacterId: number[] = [];
    object.characters.forEach(str => {
      let id: number = 0;
      let length: number = str.length;
      if(str[length - 2] === '/') {
        id = Number(str[length - 1]);
        arrOfCharacterId.push(id);
      }
      else if(str[length - 3] === '/') {
        id = Number(str[length - 2] + str[length - 1]);
        arrOfCharacterId.push(id);
      }
    })

    let arrOfResultsCharacters: Character[] = [];

    arrOfCharacterId.forEach(id => {
      let character: Character = this.fullCharactersResult.find(element => element.id == id);
      if(this.fullCharactersResult.includes(character)) {
        arrOfResultsCharacters.push(character);
      }
    })

    this.charactersResult = arrOfResultsCharacters;
  }

  public selectLocationItem(object: Location): void {
    let arrOfCharacterId: number[] = [];
    object.residents.forEach(str => {
      let id: number = 0;
      let length: number = str.length;
      if(str[length - 2] === '/') {
        id = Number(str[length - 1]);
        arrOfCharacterId.push(id);
      }
      else if(str[length - 3] === '/') {
        id = Number(str[length - 2] + str[length - 1]);
        arrOfCharacterId.push(id);
      }
    })

    let arrOfResultsCharacters: Character[] = [];

    arrOfCharacterId.forEach(id => {
      let character: Character = this.fullCharactersResult.find(element => element.id == id);
      if(this.fullCharactersResult.includes(character)) {
        arrOfResultsCharacters.push(character);
      }
    })

    this.charactersResult = arrOfResultsCharacters;
  }

  public ClickAddition(): void {
    this.router.navigate([`addition`]);
  }

  public ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
