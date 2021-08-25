import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
