import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './components/addition/addition.component';
import { CharacterViewItemComponent } from './components/character-view-item/character-view-item.component';
import { CharacterCollectionComponent } from './components/characters-collection/character-collection.component';

// const routes: Routes = [];

const appRoutes: Routes = [
  { path: '', component: CharacterCollectionComponent},
  { path: 'character/:id', component: CharacterViewItemComponent},
  { path: 'addition', component: AdditionComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
