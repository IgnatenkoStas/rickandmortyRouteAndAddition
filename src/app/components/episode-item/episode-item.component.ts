import { Episode } from './../../interfaces/episode.interface';
import { NgStyle } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector : "app-episode-item",
    templateUrl : "./episode-item.component.html",
    styleUrls : ["./episode-item.component.css"]
})
export class EpisodeItemComponent implements OnInit{
    @Input() public episodeItem: Episode;
    @Output() select = new EventEmitter<Episode>();

    ngOnInit(): void {

    }

    public selectEpisode(): void {
      this.select.next(this.episodeItem);
    }
}
