import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HeroList } from './hero-list';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private MessagesService:MessagesService ) { }

  getHeroes():Observable<Hero[]>{
    this.MessagesService.addMesage("Fetching data from server.");
    return of(HeroList);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.MessagesService.addMesage(`HeroService: fetched hero id=${id}`);
    return of(HeroList.find(hero => hero.id === id));
  }

}
