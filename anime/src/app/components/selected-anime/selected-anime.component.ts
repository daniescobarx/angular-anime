import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { MySelect } from '../../interfaces/api-movies';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrl: './selected-anime.component.css'
})
export class SelectedAnimeComponent implements OnInit {
    animes_selected: MySelect[] = [];
    constructor(private AnimeService : AnimeService){ }

    ngOnInit(): void {
        this.AnimeService.getAnimeSelected().subscribe(anime => {
          console.log(anime);
          this.animes_selected.push(anime)
        } )
    }

    aumentarEp(anime: MySelect){
      anime.watched_episodes++;
    }

    diminuirEp(anime: MySelect){
      anime.watched_episodes--;
    }
}
