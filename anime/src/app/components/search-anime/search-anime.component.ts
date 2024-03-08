import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrl: './search-anime.component.css'
})
export class SearchAnimeComponent implements OnInit {
    searchTerm: string = '';


      constructor(){ }

      ngOnInit(): void {

      }

      search(){
        console.log(this.searchTerm)
      }
}
