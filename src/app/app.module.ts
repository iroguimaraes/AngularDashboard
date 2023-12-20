
// Essentials
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Router Module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterLink, RouterLinkActive, provideRouter } from '@angular/router';

// Material Module
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

// Components
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';

// PrimeNG Chart Module
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    // Essential
    CommonModule,
    BrowserModule,
    // Routing
    AppRoutingModule,
    // Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    // PrimeNG Chart Modules
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
