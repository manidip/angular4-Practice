import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private HeroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  } 

  heroes:Hero[];

  getHeroes(){
    this.HeroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  
}
