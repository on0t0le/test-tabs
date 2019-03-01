import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs-content',
  templateUrl: './tabs-content.component.html',
  styleUrls: ['./tabs-content.component.css']
})
export class TabsContentComponent {

  @Input() message: string;

  @Output() deleteEvent = new EventEmitter<string>();
  
  deleteTab() {
    this.deleteEvent.emit('Button was clicked!');
  }

}
