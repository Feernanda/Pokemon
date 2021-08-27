import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tradingcardgame',
  templateUrl: './tradingcardgame.component.html',
  styleUrls: ['./tradingcardgame.component.css']
})
export class TradingcardgameComponent implements OnInit {
  signUpForm: FormGroup; 

  constructor(private builder: FormBuilder) {

    this.signUpForm = this.builder.group({
      name: [''],
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      terms: ['', Validators.compose([Validators.required, Validators.requiredTrue])]
      
    });
   }
   send(values:any){
    console.log(values);
  }
  ngOnInit(): void {
  }

}
