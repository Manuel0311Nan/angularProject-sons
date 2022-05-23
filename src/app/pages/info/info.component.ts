import { MessageService } from '../../core/services/message/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public message: string[]= [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.message = this.messageService.getMessage();
  }

}
