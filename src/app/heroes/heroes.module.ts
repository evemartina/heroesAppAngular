import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { ListHeroeComponent } from './pages/list-heroe/list-heroe.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeHomeComponent } from './pages/heroe-home/heroe-home.component';



@NgModule({
  declarations: [
    AddHeroeComponent,
    ListHeroeComponent,
    SearchHeroeComponent,
    HeroeComponent,
    HeroeHomeComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HeroesModule { }
