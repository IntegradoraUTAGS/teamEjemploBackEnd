import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private _heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(
      params => {
        this.heroes = _heroesService.buscarHeroes(params.termino);
        this.termino = params.termino;
        console.log(params.termino);
      });

  }

  ngOnInit() {
  }

  verHeroe(index: number){
    this.router.navigate( ['/heroe', index ]);
    // console.log( params.id );
  }

}
