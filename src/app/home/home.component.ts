import { Component } from '@angular/core';
import { GameBuilderComponent } from '../game-builder/game-builder.component';
import { HeroSelectorComponent } from '../hero-selector/hero-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameBuilderComponent, HeroSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
