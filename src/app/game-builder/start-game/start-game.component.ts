import { Component } from '@angular/core';
import { BuilderService } from '../../services/builder.service';
import { Subscription } from 'rxjs';
import { Build } from '../../interfaces/build.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss',
})
export class StartGameComponent {
  build: Build = {
    items: [],
    hasAghanimShard: false,
    hasAghanimScepter: false,
  };
  private subscription: Subscription[] = [];

  constructor(private builderService: BuilderService) {
    this.subscription.push(
      this.builderService.getSelectedTalent().subscribe(() => {
        this.builderService.getStageBuild('startItems').subscribe((build) => {
          this.build = build;
        });
      })
    );
  }

  getItemImage(item: string): string {
    return `https://dota1x6.com/images/dota_items/${item.replace(
      /^item_/,
      ''
    )}.png`;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
