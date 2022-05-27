import { ICharacters } from './../../pages/list/characters.models';
import { Pipe, PipeTransform } from '@angular/core';

const LIMIT_PAGE = 4;
@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {

  transform(value: ICharacters[], page:number): ICharacters[] {
   const init =page*LIMIT_PAGE ;
   const end= (page + 1)*LIMIT_PAGE;
   return value.slice(init,end)
  }

}
