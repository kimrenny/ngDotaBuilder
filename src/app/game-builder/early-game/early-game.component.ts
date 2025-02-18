import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BuilderService } from '../../services/builder.service';
import { CommonModule } from '@angular/common';
import { Build } from '../../interfaces/build.interface';

@Component({
  selector: 'app-early-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './early-game.component.html',
  styleUrl: './early-game.component.scss',
})
export class EarlyGameComponent implements OnDestroy {
  build: Build = {
    items: [],
    hasAghanimShard: false,
    hasAghanimScepter: false,
  };
  private subscription: Subscription[] = [];

  constructor(private builderService: BuilderService) {
    this.subscription.push(
      this.builderService.getSelectedTalent().subscribe(() => {
        this.builderService.getStageBuild('earlyItems').subscribe((build) => {
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
