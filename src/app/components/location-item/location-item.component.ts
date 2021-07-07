import { Location } from './../../interfaces/location.interface';
import { NgStyle } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector : "app-location-item",
    templateUrl : "./location-item.component.html",
    styleUrls : ["./location-item.component.css"]
})
export class LocationItemComponent implements OnInit{
    @Input() public locationItem: Location;
    @Output() select = new EventEmitter<Location>();

    ngOnInit(): void {

    }

    public selectLocation(): void {
      this.select.next(this.locationItem);
    }
}
