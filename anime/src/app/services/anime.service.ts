import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { APIAnime, Anime } from '../interfaces/api-movies';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {
    private API_URL = 'https://api.jikan.moe/v4/anime?q=';

    private anime_response$ = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAnimes(searchTerm: string): Observable<APIAnime> {
    return this.http.get<APIAnime>(`${this.API_URL}${searchTerm}`);
  }

  //metodo
  addResultAnime(anime: Anime[]) {
    this.anime_response$.next(anime);
  }


  getResultAnime(): Observable<Anime[]> {
   return this.anime_response$.asObservable()
  }



}
