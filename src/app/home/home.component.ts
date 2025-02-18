import { Component } from '@angular/core';
import { GameBuilderComponent } from '../game-builder/game-builder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameBuilderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
