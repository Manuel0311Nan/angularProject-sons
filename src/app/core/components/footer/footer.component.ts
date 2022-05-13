import { Component, OnInit } from '@angular/core';
import { IsocialMedia } from '.../../src/app/models/socialMedia.models';
import { socialMedia } from './social-media.congif';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialMedia:IsocialMedia[]= socialMedia as IsocialMedia[];
  constructor() { }

  ngOnInit(): void {
  }

}
