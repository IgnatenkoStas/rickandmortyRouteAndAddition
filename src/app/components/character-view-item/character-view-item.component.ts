import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CharacterService } from 'src/app/services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector : "app-character-view-item",
    templateUrl : "./character-view-item.component.html",
    styleUrls : ["./character-view-item.component.css"]
})
export class CharacterViewItemComponent implements OnInit {
    @Output() public back = new EventEmitter<number>();

    public characterIitem: Character;
    public id: number = 0;

    constructor(private characterService: CharacterService, private activateRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
      this.id = this.activateRoute.snapshot.params['id'];
      this.getCharacter();
    }

    public getCharacter(): void {
      this.characterService.getCharacters().subscribe( data => {
        this.characterIitem = data.find(result => result.id == this.id);
       });
    }

    public returnBack(): void {
      this.router.navigate(['']);
      // this.back.next();
    }
}
