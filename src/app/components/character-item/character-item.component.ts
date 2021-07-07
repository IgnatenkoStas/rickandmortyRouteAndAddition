import { Router } from '@angular/router';
import { Character } from './../../interfaces/character.interface';
import { NgStyle } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector : "app-character-item",
    templateUrl : "./character-item.component.html",
    styleUrls : ["./character-item.component.css"]
})
export class CharacterItemComponent {
    @Input() public characterIitem: Character;
    @Output() public select = new EventEmitter<number>();

    constructor(private router: Router) {
    }

    public selectCharacter():void {
      this.router.navigate([`character`, this.characterIitem.id]);
    }
}
