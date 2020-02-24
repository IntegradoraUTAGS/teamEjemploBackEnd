import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component ({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  heroe: any;

  constructor( private _hereoService: HeroesService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = _hereoService.getHeroe( params.id );
      console.log( this.heroe );
    });
  }

}
