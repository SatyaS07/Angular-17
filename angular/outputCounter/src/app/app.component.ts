import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'outputCounter';
  x = 0;
  @ViewChild(HeaderComponent) hc!: HeaderComponent;
  received()
  {
    this.x=this.hc.count;
  }
  val!:string;
  receive(str:string)
  {
    console.log(str)
  }
}
