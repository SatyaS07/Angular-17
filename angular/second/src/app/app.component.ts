import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  n = 'prasad';
  img = 'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-plus-sm-s926bzvcins-thumb-539572998?$GNB_CARD_FULL_M_PNG_PNG$';
  title = 'Samsung S24';
  price = '79,999';c=0
  isNotAvailable = true;
  fun()
  {
    alert("button clicked")  
  }
  incr()
  {

  }
}
