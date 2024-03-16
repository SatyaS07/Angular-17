import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  img1="https://th.bing.com/th/id/OIP.86saHbx18iltkDCl1G6OSgHaLJ?w=119&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7";
  title1 = 'Book1';
  img2="https://th.bing.com/th/id/OIP.8TD_d_dRAQZ9nMWBjjB8pwHaLe?w=115&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7";
  title2 = 'Book2'
  img3="https://th.bing.com/th/id/OIP.5aV2btRYQWcn2Seupz61ygHaLX?w=115&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7";
  title3 = 'Book3'
  img4="https://th.bing.com/th/id/OIP.NG9qlW_47XEBlx67cLrTZgHaLX?w=118&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7";
  title4 = 'Book4'
  c = 0;
  incr()
  {
    this.c++;
  }
}
