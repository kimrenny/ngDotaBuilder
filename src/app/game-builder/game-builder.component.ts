import { Component } from '@angular/core';
import { TalentSelectionComponent } from './talent-selection/talent-selection.component';
import { EarlyGameComponent } from './early-game/early-game.component';
import { StartGameComponent } from './start-game/start-game.component';
import { MidGameComponent } from './mid-game/mid-game.component';
import { LateGameComponent } from './late-game/late-game.component';

@Component({
  selector: 'app-game-builder',
  imports: [
    TalentSelectionComponent,
    StartGameComponent,
    EarlyGameComponent,
    MidGameComponent,
    LateGameComponent,
  ],
  templateUrl: './game-builder.component.html',
  styleUrl: './game-builder.component.scss',
})
export class GameBuilderComponent {}
