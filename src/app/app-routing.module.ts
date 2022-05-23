
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'info', loadChildren: () => import('./pages/info/info.module').then(m=>m.InfoModule)},
  { path: 'list', loadChildren: () => import('./pages/list/character-list.module').then(m=>m.CharacterListModule)},
  { path: 'list/:characterId', loadChildren: () => import('./pages/character-detail/character-detail.module').then(m=>m.CharacterDetailModule)},
  { path: 'media', loadChildren: () => import('./pages/media/media.module').then(m=>m.MediaModule)},
  // { path: 'list/:userId', component: CharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
