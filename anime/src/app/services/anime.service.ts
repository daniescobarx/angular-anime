import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {
    private API_URL = 'https://api.jikan.moe/v4/anime?q=';

  constructor(private http: HttpClient) { }

  getAnimes(searchTerm: String){
    const url = this.API_URL + searchTerm;
    console.log(url);
  }

}
