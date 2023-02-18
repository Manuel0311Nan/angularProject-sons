//import { characters } from './../../pages/list/character-list.config';
import { ICharacters } from './../../pages/list/characters.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  constructor(){}

  transform(value: ICharacters[], filter: string): ICharacters[] {
    return value.filter(characters => {
      return characters.alias.toLowerCase().includes(filter.toLowerCase());
    });
  }

}
