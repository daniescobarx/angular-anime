import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrl: './selected-anime.component.css'
})
export class SelectedAnimeComponent implements OnInit {
    constructor(private AnimeService : AnimeService){ }

    ngOnInit(): void {
        this.AnimeService.getAnimeSelected().subscribe(result => {
          console.log(result);
        } )
    }
}
