import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { PokedexComponent } from "./pokedex/pokedex.component";
import { AplicationsComponent } from "./aplications/aplications.component";
import { TradingcardgameComponent } from "./tradingcardgame/tradingcardgame.component";
import { TvpokemonComponent } from "./tvpokemon/tvpokemon.component";
import { PlaypokemonComponent } from "./playpokemon/playpokemon.component";

export const HOME_ROUTES: Routes = [
 {
     path: 'index',
     component: IndexComponent
 },
 {
     path:'pokedex',
     component: PokedexComponent
    
 },
 {
     path: 'aplications',
     component: AplicationsComponent

 },
 {
     path: 'tradingcardgame',
     component: TradingcardgameComponent

 },
 {
     path: 'tvpokemon',
     component: TvpokemonComponent
 },
 {
     path: 'playpokemon',
     component: PlaypokemonComponent
 }
];

@NgModule({
    imports: [RouterModule.forRoot(HOME_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }