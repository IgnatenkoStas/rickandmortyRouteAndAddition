import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CharacterService } from 'src/app/services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector : "app-addition",
    templateUrl : "./addition.component.html",
    styleUrls : ["./addition.component.css"]
})
export class AdditionComponent implements OnInit {

    public newName: string = '';
    public newStatus: string = '';
    public newGender: string = '';
    public newSpecies: string = '';

    public imageUrl: string = '';

    constructor(private characterService: CharacterService, private activateRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
    }

    public createNewCharacter(): void {
      if(
        this.newName.trim() !== '' &&
        this.newStatus.trim() != '' &&
        this.newGender.trim() != '' &&
        this.newSpecies.trim() != '' &&
        this.imageUrl.trim() != ''
      ) {
        let newCharacter: Character = {
          id: 1,
          name: this.newName,
          status: this.newStatus,
          species: this.newSpecies,
          type: '',
          gender: this.newGender,
          origin: {},
          location: null,
          image: this.imageUrl,
          episode: [],
          url: '',
          created: ''
        }

        this.characterService.addNewCharacter.next(newCharacter);
        this.returnBack();
      }
      else {
        console.log('Error');
      }
    }

    public returnBack(): void {
      this.router.navigate(['']);
    }

    public selectImage(file: File): void {
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        this.imageUrl = event.target.result as string;
      }
    }

    public switchToInputFromImage(): void {
      this.imageUrl = '';
    }
}
