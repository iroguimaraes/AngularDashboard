import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatGridList, MatGridTile, RouterLink, RouterModule, MatButtonModule],
})
export class HomeComponent {

}
