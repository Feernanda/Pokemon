import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-playpokemon',
  templateUrl: './playpokemon.component.html',
  styleUrls: ['./playpokemon.component.css']
})
export class PlaypokemonComponent implements OnInit {

  loginForm: FormGroup; 

  constructor(private builder: FormBuilder) {

    this.loginForm = this.builder.group({
      user: ['', Validators.required],
      
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      
    });
   }
   send(values:any){
    console.log(values);
  }
  ngOnInit(): void {
  }

}
