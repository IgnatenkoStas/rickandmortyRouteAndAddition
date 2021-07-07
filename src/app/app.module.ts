import { LocationItemComponent } from './components/location-item/location-item.component';
import { EpisodeItemComponent } from './components/episode-item/episode-item.component';
import { EpisodeService } from './services/episodes.service';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { Character } from './interfaces/character.interface';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CharacterViewItemComponent } from './components/character-view-item/character-view-item.component';
import { CharacterCollectionComponent } from './components/characters-collection/character-collection.component';
import { AdditionComponent } from './components/addition/addition.component';
import { CharacterService } from './services/characters.service';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CharacterItemComponent,
    EpisodeItemComponent,
    LocationItemComponent,
    CharacterViewItemComponent,
    CharacterCollectionComponent,
    AdditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [], // ?????????????????
  bootstrap: [AppComponent]
})
export class AppModule { }
