import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTernding(mediaType:string):Observable<any>
  {
   return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=7e52b13ab017ae620a8b50b43e9c047f`)
  }
  getMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7e52b13ab017ae620a8b50b43e9c047f&language=en-US`)
  }
}
