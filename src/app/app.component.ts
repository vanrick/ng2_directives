import { Component } from '@angular/core';

import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private value = 100;
  private items = ['A','B','C','D','E']
  private switch = true;
  onSwitch(){
    this.switch = !this.switch;
  }
}
