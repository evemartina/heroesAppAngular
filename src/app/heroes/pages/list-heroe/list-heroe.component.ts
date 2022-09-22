import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-list-heroe',
  templateUrl: './list-heroe.component.html',
  styles:[`
    mat-card{margin-top:20px;
    }

  `]
})
export class ListHeroeComponent implements OnInit {

    heroes :Heroe[]= [];

  constructor( private herosService:HeroesService) { }

  ngOnInit(): void {
    this.herosService.getHeroes().subscribe(resp=> this.heroes = resp);
  }


}
