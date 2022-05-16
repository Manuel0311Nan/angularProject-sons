
import { IsocialMedia } from '../../../../models/socialMedia.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  @Input () public socialMedia?: IsocialMedia;
  constructor() { }

  public bgEnter: boolean = false;
  ngOnInit(): void {
  }
  onEnterMouse(): void{
    this.bgEnter = !this.bgEnter;
  }
}
