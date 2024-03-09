import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrl: './result-anime.component.css'
})
export class ResultAnimeComponent implements OnInit {
  constructor(private AnimeService: AnimeService){

  }

  ngOnInit(): void {
      this.AnimeService.getResultAnime().subscribe(result => {
        console.log('componente result-anime',result);
      })
  }
}
