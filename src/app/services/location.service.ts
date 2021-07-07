import { LocationMain } from './../interfaces/locationMain.interface';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn : "root"})
 export class LocationService{

    constructor(private http : HttpClient){
    }

     getLocations() : Observable<LocationMain> {
        return this.http.get<LocationMain>("https://rickandmortyapi.com/api/location");
     }
 }
