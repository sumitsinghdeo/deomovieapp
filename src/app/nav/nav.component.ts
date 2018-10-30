import { Component, OnInit } from '@angular/core';
import { Languages } from '../models/languages';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

selectLanguage:string;
  language: Languages[];
  constructor() { }

  ngOnInit() {
    // this.language=[
    //   {Id:"all", Name:"All"},
    //   {Id:"en", Name:"English"},
    //   {Id:"hi", Name:"Hindi"},
    //   {Id:"te", Name:"Telugu"},
    //   {Id:"ta", Name:"Tamil"},
    //   {Id:"kn", Name:"Kannada"},

    // ];
    // this.selectLanguage="all";
    // console.log(this.language);
  }
 
}
