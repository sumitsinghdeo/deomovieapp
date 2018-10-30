import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie:any;
genres:any[];
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
movieId:string;
  ngOnInit() {
    this.movieId=this.route.snapshot.paramMap.get('id');
    this.movieService.getMoviesById(this.movieId).subscribe((res:any)=>{
      console.log(res);
      this.movie=res;
    })

console.log(this.genres);
  }

}
