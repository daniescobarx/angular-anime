import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrl: './search-anime.component.css'
})
export class SearchAnimeComponent implements OnInit {
    searchTerm: string = '';


      constructor(private AnimeService: AnimeService){ }

      ngOnInit(): void {

      }

      search(){
        this.AnimeService.getAnimes(this.searchTerm).subscribe(result => {
          console.log(result);
          this.AnimeService.addResultAnime(result.data);
        })
        //console.log(this.searchTerm)
      }
}
