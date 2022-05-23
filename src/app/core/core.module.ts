import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { MessageService } from './services/message/message.service';
import { SocialMediaComponent } from './components/footer/social-media/social-media.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SocialMediaComponent
  ],
  //inyectables de js
  providers:[
    MessageService,
    CharactersService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
