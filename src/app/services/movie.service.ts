import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
api_url:string='https://api.themoviedb.org/3/';
api_key:string='api_key=71ae09605e00bb0d42e1fd77b38d7b0d&language=en-US';
search_movie: string='search/movie?'




  getMoviesBySearch(querry: string){
    return this.http.get(this.api_url+this.search_movie+this.api_key+'&query='+querry);
                      
  }

  getMoviesById(id:string){
    return this.http.get(this.api_url+'movie/'+id+'?'+this.api_key);
  }

  getPopularMovies(selection: string){
    return this.http.get('https://api.themoviedb.org/3/movie/'+selection+'?api_key=71ae09605e00bb0d42e1fd77b38d7b0d&language=en-US&page=1');
  }
}
