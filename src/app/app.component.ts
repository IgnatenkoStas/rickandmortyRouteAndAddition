import { Observable } from 'rxjs';
import { Location } from './interfaces/location.interface';
import { CharacterMain } from './interfaces/characterMain.interface';
import { LocationService } from './services/location.service';
import { EpisodeService } from './services/episodes.service';
import { CharacterService } from './services/characters.service';
import { Component, OnInit } from '@angular/core';
import { Character } from './interfaces/character.interface';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import {map, take, tap} from 'rxjs/operators'
import { Episode } from './interfaces/episode.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }
}
