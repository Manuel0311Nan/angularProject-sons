import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CharacterListModule } from './pages/list/character-list.module';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './pages/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharacterListModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
