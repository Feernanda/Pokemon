import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [
    {
      "img" : "./../../../assets/images/header/25th-237x80.jpg",
      "href" : "https://25.pokemon.com/es-es/"
    },
    {
      "img" : "./../../../assets/images/header/swsh06-gus-237-es.jpg",
      "href" : "https://tcg.pokemon.com/es-mx/"
    },
    {
      "img" : "./../../../assets/images/header/unite-237x80.jpg",
      "href" : "https://unite.pokemon.com/es-mx/"
    },
    {
      "img" : "./../../../assets/images/header/new-pokemon-snap-gus-237.jpg",
      "href" : "https://newpokemonsnap.pokemon.com/es-es/"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
