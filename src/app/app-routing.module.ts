import { InfoComponent } from './pages/info/info.component';
import { MediaComponent } from './pages/media/media.component';
import { CharacterComponent } from './pages/list/character/character.component';
import { ListComponent } from '../app/pages/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'info', component: InfoComponent},
  { path: 'list', component: ListComponent},
  { path: 'media', component: MediaComponent},
  { path: 'list/:userId', component: CharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
