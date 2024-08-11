import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('darker');
      document.getElementsByClassName('toolbar-color')[0].classList.add('darker')
    } else {
      document.body.classList.remove('darker');
      document.getElementsByClassName('toolbar-color')[0].classList.remove('darker')
    }
  }

}
