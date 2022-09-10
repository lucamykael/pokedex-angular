import { Component } from '@angular/core';
import { PokemonService } from 'src/_services/pokemon.service';
import { Pokemon } from '../../__model/Pokemon';
import { Type } from '../../__model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {

  constructor(
    public pokemonService: PokemonService
  ) {

  }
}