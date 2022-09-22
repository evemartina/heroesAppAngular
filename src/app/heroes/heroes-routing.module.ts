import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ListHeroeComponent } from './pages/list-heroe/list-heroe.component';
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeHomeComponent } from './pages/heroe-home/heroe-home.component';

const routes :Routes =[
	{
		path:'',
    component:HeroeHomeComponent,
		children:[
			{
				path:'list',
				component:ListHeroeComponent
			},
	  		{
				path:'add',
				component:AddHeroeComponent
			},
	  		{
				path:'search',
				component:SearchHeroeComponent
			},
	  		{
				path:'edit/:id',
				component:AddHeroeComponent
			},
	  		{
				path:':id',
				component:HeroeComponent
			},
			{
				path:'**',
				redirectTo:'list'
			}

		]
	}
];


@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports:[
	RouterModule
  ]
})
export class HeroesRoutingModule { }
