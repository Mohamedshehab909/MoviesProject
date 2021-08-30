import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500/';
  trendingMovies:any[] = [];

  constructor(private _MoviesService:MoviesService) {

    _MoviesService.getTernding('movie').subscribe((data)=>{
      this.trendingMovies = data.results ;
    });
   }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    margin:8 ,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
}
