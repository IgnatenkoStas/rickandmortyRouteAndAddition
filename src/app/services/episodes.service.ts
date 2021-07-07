import { EpisodeMain } from './../interfaces/episodeMain.interface';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn : "root"})
 export class EpisodeService{

    constructor(private http : HttpClient){
    }

     getEpisodes() : Observable<EpisodeMain> {
        return this.http.get<EpisodeMain>("https://rickandmortyapi.com/api/episode");
     }


 }
