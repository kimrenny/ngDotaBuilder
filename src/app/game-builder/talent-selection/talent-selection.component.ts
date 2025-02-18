import { Component, OnDestroy } from '@angular/core';
import { BuilderService } from '../../services/builder.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-talent-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './talent-selection.component.html',
  styleUrl: './talent-selection.component.scss',
})
export class TalentSelectionComponent implements OnDestroy {
  talentNames: string[] = [];
  selectedTalent: string | null = null;

  private subscription: Subscription[] = [];

  constructor(private builderService: BuilderService) {
    this.subscription.push(
      this.builderService.getTalents().subscribe((talents) => {
        this.talentNames = talents;
      })
    );

    this.subscription.push(
      this.builderService.getSelectedTalent().subscribe((talent) => {
        this.selectedTalent = talent;
      })
    );
  }

  selectTalent(talent: string): void {
    this.builderService.setSelectedTalent(talent);
  }

  getTalentImage(talent: string): string {
    return `https://dota1x6.com/images/talents/${talent}.png`;
  }

  isHeroSelected(): boolean {
    return this.talentNames.length > 0;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
