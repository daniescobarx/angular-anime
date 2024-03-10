import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../interfaces/api-movies';


@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrl: './result-anime.component.css'
})
export class ResultAnimeComponent implements OnInit {

  anime_results: Anime[] = [];

  constructor(private AnimeService: AnimeService){

  }

  ngOnInit(): void {
      this.AnimeService.getResultAnime().subscribe(result => {
        //console.log('componente result-anime',result);
        this.anime_results = result
      })
  }


  addAnime(anime: Anime){
      console.log("add blz"+ anime);
  }

}
