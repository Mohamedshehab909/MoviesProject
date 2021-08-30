import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies:any[] = [];
  trendingtv:any[] = [];
  trendingPeople:any[] = [];


  imgPrefix:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService) {

    _MoviesService.getTernding('movie').subscribe((data)=>{
      this.trendingMovies = data.results.slice(0,10) ;
    });

    _MoviesService.getTernding('tv').subscribe((data)=>{
      this.trendingtv = data.results.slice(0,10) ;
    });

    _MoviesService.getTernding('person').subscribe((data)=>{
      this.trendingPeople = data.results.slice(0,10) ;
    });
  }

  ngOnInit(): void {
  }

}
