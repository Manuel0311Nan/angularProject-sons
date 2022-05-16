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
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
