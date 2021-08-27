import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplications',
  templateUrl: './aplications.component.html',
  styleUrls: ['./aplications.component.css']
})
export class AplicationsComponent implements OnInit {

  images = [ 
  {
    "src" : "./../../../assets/images/slider/004.png",
    "name" : "Charmander"
  },
  {
    "src" : "./../../../assets/images/slider/051.png",
    "name" : "Dugtrio"

  },
  {
    "src" : "./../../../assets/images/slider/382.png",
    "name" : "Kyogre"
  },
  {
    "src" : "./../../../assets/images/slider/423.png",
    "name" : "Gastrodon"
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
