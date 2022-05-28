
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', loadChildren: () => import('./pages/info/info.module').then(m=>m.InfoModule)},
  { path: 'list', loadChildren: () => import('./pages/list/character-list.module').then(m=>m.CharacterListModule)},
  { path: 'list/:characterId', loadChildren: () => import('./pages/character-detail/character-detail.module').then(m=>m.CharacterDetailModule)},
  { path: 'edit-character/:id', loadChildren: () => import('./pages/edit-character/edit-character.module').then(m => m.EditCharacterModule) },
  { path: 'create-character', loadChildren: () => import('./pages/create-character/create-character.module').then(m => m.CreateCharacterModule) },
  {
    path: "**",
    redirectTo:''
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
