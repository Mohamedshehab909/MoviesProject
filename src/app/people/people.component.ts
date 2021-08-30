import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  trendingPeople:any[] = [];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
   this. _MoviesService.getTernding('person').subscribe((data)=>{
      this.trendingPeople = data.results;
    });
  }

}
