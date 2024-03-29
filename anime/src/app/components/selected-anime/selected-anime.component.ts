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
      this.animes_selected = JSON.parse(localStorage.getItem('my_anime') as any) || [];

        this.AnimeService.getAnimeSelected().subscribe(anime => {
          console.log(anime);
          this.animes_selected.push(anime)
          localStorage.setItem('my_anime', JSON.stringify(this.animes_selected));
          console.log('Dados salvos no localStorage:', localStorage.getItem('my_select'));
        } )
    }

    aumentarEp(anime: MySelect){
      anime.watched_episodes++;
      localStorage.setItem('my_anime', JSON.stringify(this.animes_selected));
    }

    diminuirEp(anime: MySelect){
      anime.watched_episodes--;
      localStorage.setItem('my_anime', JSON.stringify(this.animes_selected));
    }
}
