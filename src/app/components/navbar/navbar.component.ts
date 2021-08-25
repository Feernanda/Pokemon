import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links=[
    {
      "icon" : "./../../../assets/images/icon/pngwing.com.png",
      "href" : "/index",
      "text" : "Inicio"
    },
    {
      "icon" : "./../../../assets/images/icon/pngwing.com.png",
      "href" : "/pokedex",
      "text" : "Pokédex"
    },
    {
      "icon" : "./../../../assets/images/icon/pngwing.com.png",
      "href" : "/aplications",
      "text" : "Videojuegos y aplicaciones"
    },
    {
      "icon" : "./../../../assets/images/icon/pngwing.com.png",
      "href" : "/tradingcardgame",
      "text" : "Juego de Cartas Coleccionables"
    },
    {
      "icon" : "./../../../assets/images/icon/pngwing.com.png",
      "href" : "/tvpokemon",
      "text" : "TV Pokémon"
    },
    {
      "icon" : "./../../../assets/images/icon/pngwing.com.png",
      "href" : "/playpokemon",
      "text" : "Play! Pokémon"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
