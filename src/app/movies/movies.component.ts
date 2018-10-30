import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
search:any='';
movie: any[];
lastKeyPress:number=0;
check:boolean=false;
checkMovie:boolean=false;
errorMessage:string="Sorry, The movie name you are looking for is not Present, Please try another movie! "
  constructor(private movieService: MovieService,private http: HttpClient) { }

  ngOnInit() {
      
  }
getMovies(){
  this.movieService.getMoviesBySearch(this.search).subscribe((res:any)=>{
   // console.log(res) 
  this.movie=res.results;
  //console.log(this.movie)
  })
}

autoSearch($event){
  if($event.timeStamp - this.lastKeyPress>200){
    let q=$event.target.value;
    this.movieService.getMoviesBySearch(q).subscribe((res:any)=>{
     this.movie=res.results;
     this.check=true;
     this.checkMovie=false;
     
     if(this.movie.length==0){
      this.checkMovie=true;
     
     }
     //console.log(this.movie)
     })
  }
 
  

}

}
