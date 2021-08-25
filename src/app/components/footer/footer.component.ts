import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links=[
    {
      "href" : "https://www.pokemon.com/es/noticias-pokemon/",
      "text" : "Novedades"
    },
    {
      "href" : "https://www.pokemon.com/es/guia-para-padres-tutores/",
      "text" : "Guía para padres y tutores"
    },
    {
      "href" : "https://support.pokemon.com/hc/es",
      "text" : "Servicios de atención al cliente"
    },
    {
      "href" : "https://www.pokemon.com/es/sobre-pokemon/",
      "text" : "Sobre nuestra compañía"
    },
    {
      "href" : "https://www.pokemon.com/es/pais-region/",
      "text" : "Seleccionar país o región"
    },
    {
      "href" : "https://pokemon.gamespress.com/es",
      "text" : "Sitio de prensa Pokémon"
    },
  ];

  links2=[
    {
      "href" : "https://www.pokemon.com/es/noticias-pokemon/",
      "text" : "Novedades"
    },
    {
      "href" : "https://www.pokemon.com/es/guia-para-padres-tutores/",
      "text" : "Guía para padres y tutores"
    },
    {
      "href" : "https://support.pokemon.com/hc/es",
      "text" : "Servicios de atención al cliente"
    },
    {
      "href" : "https://www.pokemon.com/es/sobre-pokemon/",
      "text" : "Sobre nuestra compañía"
    }
  ];

  links3=[
    {
      "href" : "https://www.pokemon.com/es/noticias-pokemon/",
      "text" : "Novedades"
    },
    {
      "href" : "https://www.pokemon.com/es/guia-para-padres-tutores/",
      "text" : "Guía para padres y tutores"
    },
    {
      "href" : "https://support.pokemon.com/hc/es",
      "text" : "Servicios de atención al cliente"
    },
    {
      "href" : "https://www.pokemon.com/es/sobre-pokemon/",
      "text" : "Sobre nuestra compañía"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
