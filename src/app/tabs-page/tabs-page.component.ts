import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.css']
})
export class TabsPageComponent {

  tabs = ['First', 'Second', 'Third'];
  selected: any = 0;
  receivedMessage: string = 'Hello world!';

  addTab() {
    this.tabs.push('New');
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  receiveMessage($event){
    this.receivedMessage = $event;
  }
}
