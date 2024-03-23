import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() c= new EventEmitter()
count = 0;value!:string;
send() {
  this.c.emit(this.value)
}
  incr()  { this.count++; }
  decr()  { this.count--; }
  reset() { this.count=0 }
  
}
