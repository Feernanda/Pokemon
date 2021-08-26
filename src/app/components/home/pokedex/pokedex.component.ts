import { Component, OnInit } from '@angular/core';
import { ServicePokemonService } from 'src/app/services/service-pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  img : any;
  name:any = 'bulbasaur';
  id:any;
  information:any;
  constructor(private service: ServicePokemonService) { 
    this.pokemonSearch();
  }
  pokemonSearch():any{
    this.service.getPokemon(this.name).subscribe((res: any)=>{
      this.img = res.sprites.other.dream_world.front_default;
      this.id = res.id;
      console.log(res);
    });
   }

  ngOnInit(): void {
  }

}
