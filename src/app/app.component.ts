import { Hero } from './models/hero';
import { Component } from '@angular/core';

import { HeroService } from './services/hero.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){}
  
  ngOnInit(): void {
	this.getHeroes();
  }

  getHeroes(): void {
    this.heroSerivce.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
	this.selectedHero = hero;
  }
}
