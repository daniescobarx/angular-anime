import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../interfaces/api-movies';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrl: './result-anime.component.css'
})
export class ResultAnimeComponent implements OnInit {

  anime_results: Anime[] = [];
  animeSubscription!: Subscription;

  constructor(private AnimeService: AnimeService){

  }

  ngOnInit(): void {
    this.animeSubscription = this.AnimeService.getResultAnime().subscribe(result => {
        //console.log('componente result-anime',result);
        this.anime_results = result
      })
  }

  ngOnDestroy(): void {
    this.animeSubscription.unsubscribe();
  }


  addAnime(anime: Anime){
      console.log("add blz", anime);
      const addAnime: any = {
        id: anime.mal_id,
        title: anime.title,
        image: anime.images,
        sinopse: anime.synopsis,
        eps: anime.episodes,
        duration: anime.duration
      }
  }

}
