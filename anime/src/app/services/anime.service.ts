import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { APIAnime, Anime, MySelect } from '../interfaces/api-movies';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {
    private API_URL = 'https://api.jikan.moe/v4/anime?q=';

    private anime_response$ = new Subject<Anime[]>();
    private anime_selected$ = new Subject<MySelect>();

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

  AnimeSelected(anime: MySelect){
    this.anime_selected$.next(anime);
  }

  getAnimeSelected(): Observable<MySelect>{
    return this.anime_selected$.asObservable();
  }

}
