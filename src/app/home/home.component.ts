import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { RouterLink, RouterModule } from '@angular/router';
import { DarkModeService } from '../DarkModeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterLink, RouterModule, MatButtonModule, MatCardModule],
})
export class HomeComponent {
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.isDarkMode$.subscribe((value) => {
      this.isDarkMode = value;
      const cards = document.getElementsByClassName('home-card');
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (this.isDarkMode) {
        card.classList.add('darker');
      } else {
        card.classList.remove('darker');
      }
    }
  });
}
}
