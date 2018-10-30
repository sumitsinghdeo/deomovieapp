import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-polpular-movies',
  templateUrl: './polpular-movies.component.html',
  styleUrls: ['./polpular-movies.component.css']
})
export class PolpularMoviesComponent implements OnInit {
movies: any[];
selection:string='popular';
wasClicked = false;
slectionView:string;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies(this.selection).subscribe((res:any)=>{
      this.movies=res.results;
      console.log(this.movies);
      this.slectionView="Popular Movies"


    });

  }


  getPopularMovies(){
    this.selection="popular";
    this.movieService.getPopularMovies(this.selection).subscribe((res:any)=>{
      this.movies=res.results;
      this.wasClicked= !this.wasClicked;
      this.slectionView="Popular Movies"

     
    })
  }
  getTopMovies(){
    this.selection="top_rated";
    this.movieService.getPopularMovies(this.selection).subscribe((res:any)=>{
      this.movies=res.results;
      this.wasClicked= !this.wasClicked;
      this.slectionView="Top Rated Movies"
     
    })
  }

  getUpcomingMovies(){
    this.selection="upcoming";
    this.movieService.getPopularMovies(this.selection).subscribe((res:any)=>{
      this.movies=res.results;
      this.slectionView="Upcoming Movies"
     
    })
  }
  getPlayingMovies(){
    this.selection="now_playing";
    this.movieService.getPopularMovies(this.selection).subscribe((res:any)=>{
      this.movies=res.results;
      this.slectionView="Now playing Movies"
     
    })
  }
 
 
}
