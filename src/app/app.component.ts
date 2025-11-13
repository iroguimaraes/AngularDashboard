import { Component } from '@angular/core';
import { DarkModeService } from './DarkModeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {

  isDarkMode = false;

  constructor(private darkModeService: DarkModeService) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeService.setDarkMode(this.isDarkMode);

    if (this.isDarkMode) {
      document.body.classList.add('darker');
      document.getElementsByClassName('toolbar-color')[0].classList.add('darker')
      //document.getElementsByClassName('mat-card')[0].classList.add('darker')
    } else {
      document.body.classList.remove('darker');
      document.getElementsByClassName('toolbar-color')[0].classList.remove('darker')
      //document.getElementsByClassName('mat-card')[0].classList.remove('darker')
    }
  }

}
