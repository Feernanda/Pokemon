import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/home/index/index.component';
import { PokedexComponent } from './components/home/pokedex/pokedex.component';
import { AplicationsComponent } from './components/home/aplications/aplications.component';
import { TradingcardgameComponent } from './components/home/tradingcardgame/tradingcardgame.component';
import { TvpokemonComponent } from './components/home/tvpokemon/tvpokemon.component';
import { PlaypokemonComponent } from './components/home/playpokemon/playpokemon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HOME_ROUTES } from './components/home/home-router.module'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    PokedexComponent,
    AplicationsComponent,
    TradingcardgameComponent,
    TvpokemonComponent,
    PlaypokemonComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( HOME_ROUTES, {useHash:true}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
